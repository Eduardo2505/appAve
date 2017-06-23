import { Component} from '@angular/core';

import { SubSolicitudesPage } from '../sub-solicitudes/sub-solicitudes';
import { MenuDesplegablePage } from '../menu-desplegable/menu-desplegable';
import { InicioPage } from '../inicio/inicio';




@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
 
  tab1Root = InicioPage;
  tab2Root = SubSolicitudesPage;
  tab3Root = MenuDesplegablePage;

  constructor() {

  }

 

}
