import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading, MenuController } from 'ionic-angular';


import { LoginServicioProvider } from '../../providers/login-servicio/login-servicio';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email;
  pass;
  nombre;
  idempleado;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public auth: LoginServicioProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private menu: MenuController) {


  }

  loading: Loading;
  registerCredentials = { email: '', password: '' };

  public login() {
    this.showLoading();
    this.auth.postLogin(this.registerCredentials)
      .then(
      data => {
        var resultado = Object.keys(data).length;
        if (resultado != 0) {
          this.nombre = data[0]["Nombre"] + " " + data[0]["apellidos"];
          this.idempleado = data[0]["idempleado"];

          this.auth.sesionUser(this.nombre, this.registerCredentials.email, this.idempleado).subscribe(allowed => {
            if (allowed) {


              this.navCtrl.push(TabsPage);
            }
          },
            error => {
              this.showError(error);
            });


        } else {
          this.showError("Access Denied");
        }

      }
      )
      .catch(
      error => {
        this.showError(error);
      }
      )
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Se esta verificando',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

  ionViewDidLoad() {
    //console.log('inicio esta Login');
  }

}
