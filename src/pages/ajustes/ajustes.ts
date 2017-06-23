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
 
  constructor(public navCtrl: NavController, 
             public navParams: NavParams,
             private viewCtrl: ViewController) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad AjustesPage');
    this.viewCtrl.showBackButton(false);
  }


 

}
