import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnexosPage } from './anexos';

@NgModule({
  declarations: [
    AnexosPage,
  ],
  imports: [
    IonicPageModule.forChild(AnexosPage),
  ],
  exports: [
    AnexosPage
  ]
})
export class AnexosPageModule {}
