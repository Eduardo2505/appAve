import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VarGlobalesProvider } from '../../providers/var-globales/var-globales';

/**
 * Generated class for the PrevioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-previo',
  templateUrl: 'previo.html',
})
export class PrevioPage {

  public ulrAuximg: string;
  public auxImg: any = [];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public varGlobal: VarGlobalesProvider) {
     this.ulrAuximg = varGlobal.ulrAuximg;
     this.auxImg = this.navParams.get('auxImg');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrevioPage');
  }

}
