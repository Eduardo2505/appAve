import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

import { AjustesPage } from '../../pages/ajustes/ajustes';
import { PerfilPage } from '../../pages/perfil/perfil';
import { LoginServicioProvider } from '../../providers/login-servicio/login-servicio';
import { VarGlobalesProvider } from '../../providers/var-globales/var-globales';


import { LoginPage } from '../login/login';

/**
 * Generated class for the MenuDesplegablePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-menu-desplegable',
  templateUrl: 'menu-desplegable.html',
})
export class MenuDesplegablePage {
  showError: any;
  @ViewChild('NAV') nav: Nav;
  public pages: Array<{ titulo: String, component: any, icon: string }>;
  public logo: string;


  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public auth: LoginServicioProvider, 
    public varGlobal: VarGlobalesProvider) {

    this.logo = varGlobal.logo;

    this.pages = [
      { titulo: 'Perfil', component: PerfilPage, icon: 'ios-contact' },
      { titulo: 'Ajustes', component: AjustesPage, icon: 'ios-cog' }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuDesplegablePage');
  }

  goToPage(page) {
    //  this.nav.setRoot(page);
    this.navCtrl.push(page);

  }
  salir() {

    this.auth.logout().subscribe(succ => {
      // this.navCtrl.push(LoginPage);
      this.navCtrl.setRoot(LoginPage);


    });
  }

}
