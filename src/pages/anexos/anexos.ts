import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform, LoadingController,ModalController } from 'ionic-angular';

import { SolicitudesSevicioProvider } from '../../providers/solicitudes-sevicio/solicitudes-sevicio';

import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { ImagePicker } from '@ionic-native/image-picker';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {PopImagenPage} from '../pop-imagen/pop-imagen';

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

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    public solicitudes: SolicitudesSevicioProvider,
    public platform: Platform,
    private imagePicker: ImagePicker,
    public loadingCtrl: LoadingController,
    private transfer: Transfer,
    private iab: InAppBrowser,
    private modal:ModalController) {

    this.IDregistro = this.navParams.get('IDregistro');
    this.tipo = this.navParams.get('tipo');
    console.log("tipo: " + this.tipo);
    console.log("IdRegistro: " + this.IDregistro);
    this.platform = platform;
    this.getAnexos("");
  }
  //falta Subir Anexos
  ionViewDidLoad() {
    this.viewCtrl.showBackButton(false);

  }
  galeria() {



    let options = {
      quality: 25,
      maximumImagesCount: 10
    };

    this.imagePicker.getPictures(options).then((results) => {
      let loading = this.loadingCtrl.create({
        content: 'Subiendo imagen...'
      });

      loading.present();
      for (var i = 0; i < results.length; i++) {
        //console.log('Image URI: ' + results[i]);

        const fileTransfer: TransferObject = this.transfer.create();
        var f = new Date();
        this.folio = "" + f.getDate() + (f.getMonth() + 1) + f.getFullYear() + f.getHours() + f.getMinutes() + f.getSeconds();

        this.nombreArchivo = this.folio + i + "_" + this.tipo + "_" + this.IDregistro;


        let options1: FileUploadOptions = {
          fileKey: 'file',
          fileName: this.nombreArchivo,
          headers: {}

        }

        fileTransfer.upload(results[i], 'http://adminave.pvessy.com/ionic/upload.php', options1)
          .then((data) => {
            // success
            loading.dismiss();
            // alert("Se subio");

          }, (err) => {
            // error
            alert("error" + JSON.stringify(err));
          });



      }
    }, (err) => { });

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
          console.log(data);

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
