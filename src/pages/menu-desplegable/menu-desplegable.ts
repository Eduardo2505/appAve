import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform, App } from 'ionic-angular';

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

  public pages: Array<{ titulo: String, component: any, icon: string }>;
  public logo: string;
  public rootPage: any;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public auth: LoginServicioProvider,
    public varGlobal: VarGlobalesProvider,
    public viewCtrl: ViewController,
    public platform: Platform,
    public app: App) {

    this.logo = varGlobal.logo;
    console.log("<<<<<<<<<<<<<<< Entro al nmenu de  del usuario>>>>>>>>>>>>");

    this.pages = [
      { titulo: 'Perfil', component: PerfilPage, icon: 'ios-contact' },
      { titulo: 'Ajustes', component: AjustesPage, icon: 'ios-cog' }
    ];
  }

  ionViewDidLoad() {
    
  }

  goToPage(page) {
  
    this.navCtrl.push(page);

  }
  salir() {
    console.log("Salio el usuario");
    this.auth.logout().subscribe(succ => {
   
      const root = this.app.getRootNav();
      root.popToRoot();
      root.setRoot(LoginPage);


    });
  }

}
