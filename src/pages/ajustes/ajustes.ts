import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


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
  private formPagos: any;
  public recordVisitForm: todoform;
  constructor(public navCtrl: NavController, 
             public navParams: NavParams,
             private viewCtrl: ViewController) {
 
              this.formPagos = [];
  }


  actualizar() {
    console.log("Ya vamos ");

    // this.solicitudes.registraPago(this.formPagos, this.nombreUser, this.idempleado, this.IDregistro)
    //   .then(
    //   data => {

    //     if (data["mensaje"] == "1") {

    //       this.showError("Se registro correctamente", "Aviso")
    //       // this.navCtrl.push(InicioPage);
    //       this.pagos = [];
    //       this.todoform.reset();
    //       this.getPagosUsuario();

    //     }
    //   }
    //   )
    //   .catch(
    //   error => {
    //     console.log(error);
    //   }
    //   )


  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AjustesPage');
    this.viewCtrl.showBackButton(false);
  }


 

}
