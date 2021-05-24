import { Component, VERSION } from '@angular/core';
import { VERSION as CDK_VERSION } from '@angular/cdk';
import { createDS, columnFactory } from '@pebula/ngrid';

import ngBootstrapPackageJson from '@ng-bootstrap/ng-bootstrap/package.json';
import ngridPackageJson from '@pebula/ngrid/package.json';
import ngridBootstrapPackageJson from '@pebula/ngrid-bootstrap/package.json';

import { Seller, getSellers } from '@ngrid-starters/datasource';

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
    { prop: 'country', headerType: 'country', width: '150px' },
    { prop: 'sales', sort: true },
    { prop: 'address' },
    { prop: 'rating', type: 'starRatings', width: '120px' },
    { prop: 'feedback', sort: true, type: { name: 'progressBar', data: { style: progressBarStyle } }, width: '150px' },
  );

@Component({
  selector: 'bootstrap-root',
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
    cdk: CDK_VERSION.full,
    ngBootstrap: ngBootstrapPackageJson.version,
    ngrid: ngridPackageJson.version,
    ngridBootstrap: ngridBootstrapPackageJson.version,
  }

  constructor() {
  }

  refresh(): void {
    this.dataSource.refresh();
  }

}
