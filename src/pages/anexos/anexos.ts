import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform, LoadingController,ModalController } from 'ionic-angular';

import { SolicitudesSevicioProvider } from '../../providers/solicitudes-sevicio/solicitudes-sevicio';

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
//import { File } from '@ionic-native/file';
import { ImagePicker } from '@ionic-native/image-picker';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {PopImagenPage} from '../pop-imagen/pop-imagen';
import { VarGlobalesProvider } from '../../providers/var-globales/var-globales';
import { PrevioPage } from '../../pages/previo/previo';

@IonicPage()
@Component({
  selector: 'page-anexos',
  templateUrl: 'anexos.html',
})
export class AnexosPage {

  public IDregistro: number;
  public tipo: number;
  public offset: number = 0;
  public registros: any = [];
  public buscar: string;
  private nombreArchivo: string;
  private folio: string;
  public url: string;
  public auxImg: any = [];
  public banderaver: number=0;
 

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    public solicitudes: SolicitudesSevicioProvider,
    public platform: Platform,
    private imagePicker: ImagePicker,
    public loadingCtrl: LoadingController,
    private transfer: FileTransfer,
    private iab: InAppBrowser,
    private modal:ModalController,
    public varGlobal: VarGlobalesProvider) {
    this.banderaver=0;
    console.log(">>>>><"+this.banderaver);
    this.IDregistro = this.navParams.get('IDregistro');
    this.tipo = this.navParams.get('tipo');
    this.platform = platform;
    this.getAnexos("");
    this.url = varGlobal.ulrUplad;
    
   
    //console.log(">>> "+this.ulrAuximg);
  }
  //falta Subir Anexos
  ionViewDidLoad() {
    this.viewCtrl.showBackButton(false);

  }
  galeria() {



    let options = {
      quality: 60,
      maximumImagesCount: 5
    };

    this.imagePicker.getPictures(options).then((results) => {
      let loading = this.loadingCtrl.create({
        content: 'Subiendo imagen...'
      });

      loading.present();
      for (var i = 0; i < results.length; i++) {
        //console.log('Image URI: ' + results[i]);

        const fileTransfer: FileTransferObject = this.transfer.create();
        var f = new Date();
        this.folio = "" + f.getDate() + (f.getMonth() + 1) + f.getFullYear() + f.getHours() + f.getMinutes() + f.getSeconds();

        this.nombreArchivo = this.folio + i + "_" + this.tipo + "_" + this.IDregistro+".jpg";

       
        let options1: FileUploadOptions = {
          fileKey: 'file',
          fileName: this.nombreArchivo,
          headers: {}

        }
        

        fileTransfer.upload(results[i], this.url, options1)
          .then((data) => {
            loading.dismiss();

          }, (err) => {
            // error
            alert("error" + JSON.stringify(err));
          });
          
          this.auxImg.push(this.nombreArchivo);

          this.banderaver=1;
          

      }
     
    }, (err) => { 


    });

    
    //
  }

 
  ver() {
    //console.log(url);
    this.navCtrl.push(PrevioPage, { auxImg: this.auxImg});
  }


  launchUrl(url) {
    //console.log(url);
    const browser = this.iab.create(url, "_system");
  }

  pop(url,desc) {
    this.modal.create(PopImagenPage,{url:url,des:desc});
    //console.log("Pop");

  }



  getAnexos(buscaraux) {



    return new Promise(resolve => {

      this.solicitudes.getAnexos(this.IDregistro, buscaraux, this.tipo, this.offset)
        .then(data => {
          this.registros = data;
          //console.log(data);

          resolve(true);

        });

    });

  }


  doInfinite(infiniteScroll) {

    this.offset += 5;
    setTimeout(() => {
      this.getAnexos(this.buscar).then(() => {
        infiniteScroll.complete();
      });
    }, 500);
  }

  initializeItems(): void {

    this.registros = [];
  }

  getItems(ev: any) {
    this.initializeItems();
    let val = ev.target.value;
    this.getAnexos(val);
  }

}
