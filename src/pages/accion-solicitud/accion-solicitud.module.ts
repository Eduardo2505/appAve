import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccionSolicitudPage } from './accion-solicitud';

@NgModule({
  declarations: [
    AccionSolicitudPage,
  ],
  imports: [
    IonicPageModule.forChild(AccionSolicitudPage),
  ],
  exports: [
    AccionSolicitudPage
  ]
})
export class AccionSolicitudPageModule {}
