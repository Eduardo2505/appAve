import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VarGlobalesProvider } from '../../providers/var-globales/var-globales';

import { AnexosPage } from '../../pages/anexos/anexos';

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
  public IDregistro: number;
  public tipo: number;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public varGlobal: VarGlobalesProvider) {
     this.ulrAuximg = varGlobal.ulrAuximg;
     this.auxImg = this.navParams.get('auxImg');
     this.IDregistro = this.navParams.get('IDregistro');
     this.tipo = this.navParams.get('tipo');
  }


  eliminar(imagen){
  
    for(var i = this.auxImg.length - 1; i >= 0; i--) {
      if(this.auxImg[i] === imagen) {
        this.auxImg.splice(i, 1);
      }
  }


  }

  guardar(){

    for(var i = this.auxImg.length - 1; i >= 0; i--) {

      // funciona que guarda las imagenes


          console.log(this.auxImg[i]);

      // fin de la funcion
    
      }
      this.navCtrl.pop();
      this.navCtrl.push(AnexosPage,{IDregistro:this.IDregistro,tipo:this.tipo});


    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrevioPage');
  }

}
