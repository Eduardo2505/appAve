import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SolicitudesAprobadasPage } from './solicitudes-aprobadas';

@NgModule({
  declarations: [
    SolicitudesAprobadasPage,
  ],
  imports: [
    IonicPageModule.forChild(SolicitudesAprobadasPage),
  ],
  exports: [
    SolicitudesAprobadasPage
  ]
})
export class SolicitudesAprobadasPageModule {}
