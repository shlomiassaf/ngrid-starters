import { Component, ViewChild, VERSION } from '@angular/core';
import { PblNgridComponent, createDS, columnFactory } from '@pebula/ngrid';

import * as cdkPackageJson from '@angular/cdk/package.json';
import * as ngridPackageJson from '@pebula/ngrid/package.json';
import * as ngridMaterialPackageJson from '@pebula/ngrid-material/package.json';

import { Seller, getSellers } from '@ngrid-starters/datasource';

const COUNTRY_GETTER = {
  currency: (row: Seller) => COUNTRY_GETTER.data.countries[row.country].currencies[0],
  name: (row: Seller) => COUNTRY_GETTER.flag(row) + ' ' + COUNTRY_GETTER.data.countries[row.country].name,
  flag: (row: Seller) => COUNTRY_GETTER.data.countries[row.country].emoji,
  data: undefined as any
}

const progressBarStyle = (value: number) => {
  if (value > 60) {
    return { color: 'white', background: 'green' };
  }
  if (value >=40 && value <= 60) {
    return { color: 'white', background: 'deepskyblue' };
  }
  return { color: 'white', background: 'red' };
}

const COLUMNS = columnFactory()
  .default({ width: '100px', reorder: true, resize: true})
  .table(
    { prop: 'drag_and_drop_handle', type: 'drag_and_drop_handle', minWidth: 24, width: '', maxWidth: 24, wontBudge: true, resize: false, },
    { prop: 'selection',  minWidth: 48, width: '', maxWidth: 48, wontBudge: true, resize: false, },
    { prop: 'id', sort: true, width: '40px', wontBudge: true, pIndex: true },
    { prop: 'name', sort: true },
    { prop: 'email', minWidth: 250, width: '150px' },
    { prop: 'country', headerType: 'country', type: { name: 'countryNameDynamic', data: COUNTRY_GETTER }, width: '150px' },
    { prop: 'sales', sort: true },
    { prop: 'address' },
    { prop: 'rating', type: 'starRatings', width: '120px' },
    { prop: 'feedback', sort: true, type: { name: 'progressBar', data: { style: progressBarStyle } }, width: '150px' },
  )
  .header(
    { rowClassName: 'pbl-groupby-row' },
    { id: 'pbl-groupby-row', type: 'pbl-groupby-row', label: ' ' },
  );

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dataSource = createDS<Seller>()
    .onTrigger( () => getSellers() )
    .create();

  columns = COLUMNS.build();

  versions = {
    ng: VERSION.full,
    cdk: cdkPackageJson.version,
    ngrid: ngridPackageJson.version,
    ngridMaterial: ngridMaterialPackageJson.version,
  }

  constructor() {
    // ds.getCountries().then( c => COUNTRY_GETTER.data = c );
  }

  refresh(): void {
    this.dataSource.refresh();
  }

  dropped(e: unknown) {
    console.log(e);
  }
}
