import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubSolicitudesPage } from './sub-solicitudes';

@NgModule({
  declarations: [
    SubSolicitudesPage,
  ],
  imports: [
    IonicPageModule.forChild(SubSolicitudesPage),
  ],
  exports: [
    SubSolicitudesPage
  ]
})
export class SubSolicitudesPageModule {}
