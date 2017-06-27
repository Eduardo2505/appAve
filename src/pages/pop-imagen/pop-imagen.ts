import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the PopImagenPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pop-imagen',
  templateUrl: 'pop-imagen.html',
})
export class PopImagenPage {

  descripcion: string;
  url:string;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewController: ViewController) {

    this.url=this.navParams.get("url");
    this.descripcion=this.navParams.get("des");

  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopImagenPage');
  }

  cerrar() {
    this.viewController.dismiss();
  }

}
