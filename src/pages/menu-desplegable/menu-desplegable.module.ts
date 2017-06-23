import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuDesplegablePage } from './menu-desplegable';

@NgModule({
  declarations: [
    MenuDesplegablePage,
  ],
  imports: [
    IonicPageModule.forChild(MenuDesplegablePage),
  ],
  exports: [
    MenuDesplegablePage
  ]
})
export class MenuDesplegablePageModule {}
