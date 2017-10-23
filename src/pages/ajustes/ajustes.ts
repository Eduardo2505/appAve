import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

//import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { LoginServicioProvider } from '../../providers/login-servicio/login-servicio';
/**
 * Generated class for the AjustesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  todo = {
    pass1: '',
    pass2: ''
  };
  public pass1: String;
  public pass2: String;
  public idempleado: number;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public aut: LoginServicioProvider,
    private viewCtrl: ViewController) {

    this.idempleado = aut.currentUser.idempleado;

  }


  actualizar(form) {

    this.pass1 = form.value.pass1;
    this.pass2 = form.value.pass2;
    if (this.pass1 == this.pass2) {

      this.aut.actualizarPass(this.idempleado,form)
        .then(
        data => {

          if (data["mensaje"] == "1") {

            this.showError("Se actualizo correctamente", "Aviso")


          }
        }
        )
        .catch(
        error => {
          console.log(error);
        }
        )

    } else {
      this.showError("Contraseñas no validas", "Error");
    }

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AjustesPage');
    this.viewCtrl.showBackButton(false);
  }



  showError(text, titulo) {
    // this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: text,
      buttons: ['Aceptar']
    });
    alert.present();
  }

}
