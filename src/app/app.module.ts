import { NgModule, ComponentFactoryResolver } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PblNgridModule } from '@pebula/ngrid';
import { PblNgridDragModule } from '@pebula/ngrid/drag';
import { PblNgridTargetEventsModule } from '@pebula/ngrid/target-events';
import { PblNgridTransposeModule } from '@pebula/ngrid/transpose';
import { PblNgridBlockUiModule } from '@pebula/ngrid/block-ui';
import { PblNgridDetailRowModule } from '@pebula/ngrid/detail-row';
import { PblNgridStickyModule } from '@pebula/ngrid/sticky';
import { PblNgridStatePluginModule } from '@pebula/ngrid/state';
import { PblNgridMaterialModule } from '@pebula/ngrid-material';

import { MATERIAL } from './material';
import { CommonTableTemplatesComponent } from './components';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MATERIAL,
    PblNgridModule.withCommon([ { component: CommonTableTemplatesComponent } ]),
    PblNgridDragModule.withDefaultTemplates(),
    PblNgridTargetEventsModule,
    PblNgridBlockUiModule,
    PblNgridTransposeModule,
    PblNgridDetailRowModule,
    PblNgridStickyModule,
    PblNgridStatePluginModule,
    PblNgridMaterialModule,
  ],
  exports: [
    MATERIAL,
    PblNgridModule,
    PblNgridDragModule,
    PblNgridTargetEventsModule,
    PblNgridBlockUiModule,
    PblNgridTransposeModule,
    PblNgridDetailRowModule,
    PblNgridStickyModule,
    PblNgridStatePluginModule,
    PblNgridMaterialModule,
  ],
})
export class AppModuleShared {
}


@NgModule({
  declarations: [
    AppComponent,
    CommonTableTemplatesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppModuleShared
  ],
  providers: [
  ],
  // TODO: Remove when not supporting ViewEngine, this is for non IVY compilations
  entryComponents: [ CommonTableTemplatesComponent ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
