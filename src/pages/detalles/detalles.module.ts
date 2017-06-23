import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetallesPage } from './detalles';

@NgModule({
  declarations: [
    DetallesPage,
  ],
  imports: [
    IonicPageModule.forChild(DetallesPage),
  ],
  exports: [
    DetallesPage
  ]
})
export class DetallesPageModule {}
