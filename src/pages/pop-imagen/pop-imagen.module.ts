import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopImagenPage } from './pop-imagen';

@NgModule({
  declarations: [
    PopImagenPage,
  ],
  imports: [
    IonicPageModule.forChild(PopImagenPage),
  ],
  exports: [
    PopImagenPage
  ]
})
export class PopImagenPageModule {}
