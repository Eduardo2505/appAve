import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { VarGlobalesProvider } from '../../providers/var-globales/var-globales';
import { LoginServicioProvider } from '../../providers/login-servicio/login-servicio';
/**
 * Generated class for the PerfilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  public imgPerfil: string;
  public user: string;


  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private viewCtrl: ViewController,
    public varGlobal: VarGlobalesProvider,
    public authx: LoginServicioProvider) {

      this.imgPerfil=varGlobal.imgPerfil;
      this.user=authx.currentUser.name;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
    this.viewCtrl.showBackButton(false);
  }

}
