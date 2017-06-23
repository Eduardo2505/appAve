import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SolicitudesPendientesPage } from './solicitudes-pendientes';

@NgModule({
  declarations: [
    SolicitudesPendientesPage,
  ],
  imports: [
    IonicPageModule.forChild(SolicitudesPendientesPage),
  ],
  exports: [
    SolicitudesPendientesPage
  ]
})
export class SolicitudesPendientesPageModule {}
