import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AnexosPage } from '../../pages/anexos/anexos';

import { SolicitudesSevicioProvider } from '../../providers/solicitudes-sevicio/solicitudes-sevicio';

import { InicioPage } from '../../pages/inicio/inicio';
import { SolicitudesPendientesPage } from '../../pages/solicitudes-pendientes/solicitudes-pendientes';
import { LoginServicioProvider } from '../../providers/login-servicio/login-servicio';
/**
 * 
 * 
 * Generated class for the AccionSolicitudPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-accion-solicitud',
  templateUrl: 'accion-solicitud.html',
})
export class AccionSolicitudPage {
  pet;
  public IDregistro: number;
  public idestado_empleado: number;
  public idestado_registro: number;
  public pantalla: number; // 1 inicio 2 solocitudes-pendinetes
  public estado: boolean;
  private empleados: any;
  private estados: any;
  private pagos: any;
  public idempleado: number;
  private todoform: FormGroup;
  private formPagos: any;
  private nombreUser: string;
  public sumita: number;
   public tipoSolicitud: number;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    public solicitudes: SolicitudesSevicioProvider,
    public alertCtrl: AlertController,
    public authx: LoginServicioProvider,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder) {
    this.idempleado = authx.currentUser.idempleado;
    this.nombreUser = authx.currentUser.name;
    this.sumita = 0;
    //console.log(this.idempleado);
    this.IDregistro = this.navParams.get('IDregistro');
    this.idestado_empleado = this.navParams.get('idestado_empleado');
    this.idestado_registro = this.navParams.get('idestado_registro');
    this.pantalla = this.navParams.get('pantalla');
    this.tipoSolicitud= this.navParams.get('tipoSolicitud');

   // console.log(this.tipoSolicitud);
    this.empleados = [];
    this.estados = [];
    this.pagos = [];
    this.formPagos = [];
    this.loadEmpleados();
    this.getEstadosSolicitudes();
    if(this.tipoSolicitud==0){
    this.verificarEstadoInicial();
    }

    this.getPagosUsuario();

    this.pet = "cerrar";

    this.todoform = this.formBuilder.group({
      cantidad: ['', Validators.compose([Validators.required, Validators.pattern("^[0-9]+(\.[0-9]{1,2})?$"), Validators.maxLength(5)])],
      descripcion: ['', Validators.maxLength(400)],
    });




    // console.log(this.IDregistro);
  }

  eliminar(idPago) {


    let alert = this.alertCtrl.create({
      title: 'Aviso',
      message: '¿Deseas eliminar este registro?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            // console.log('Cancel clicked');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            //console.log(idPago);
            this.solicitudes.eliminarPago(this.IDregistro, idPago, this.nombreUser)
              .then(
              data => {

                if (data["mensaje"] == "1") {

                 // this.showError("Se elimino correctamente", "Aviso")
                  // this.navCtrl.push(InicioPage);
                  this.pagos = [];
                  this.todoform.reset();
                  this.getPagosUsuario();

                }
              }
              )
              .catch(
              error => {
                console.log(error);
              }
              );

          }
        }
      ]
    });
    alert.present();


  }
  registraPago() {
    this.formPagos = this.todoform.value;

    this.solicitudes.registraPago(this.formPagos, this.nombreUser, this.idempleado, this.IDregistro)
      .then(
      data => {

        if (data["mensaje"] == "1") {

          this.showError("Se registro correctamente", "Aviso")
          // this.navCtrl.push(InicioPage);
          this.pagos = [];
          this.todoform.reset();
          this.getPagosUsuario();

        }
      }
      )
      .catch(
      error => {
        console.log(error);
      }
      )


  }
  verificarEstadoInicial() {
    //console.log(this.IDregistro);
    this.solicitudes.comprobarIncial(this.IDregistro, this.idestado_registro)
      .then(
      data => {

        if (data["mensaje"] == "0") {
          //se tiene que cerrar
          if (this.pantalla == 1) {

            this.navCtrl.push(InicioPage);
          } else {
            this.navCtrl.push(SolicitudesPendientesPage);

          }
        } else {

          this.verificarEstado();
        }
      }
      )
      .catch(
      error => {
        console.log(error);
      }
      )


  }

  verificarEstado() {
    //console.log(this.IDregistro);
    this.solicitudes.comprobarcierre(this.IDregistro, 6)
      .then(
      data => {

        if (data["mensaje"] == "1") {
          //se tiene que cerrar
          //console.log("falta cerrar");
          this.estado = false;
        } else {
          // console.log("falta actualizar");
          this.estado = true;
        }
      }
      )
      .catch(
      error => {
        console.log(error);
      }
      )


  }
  loading: Loading;
  todo = { idempleado: 0 };

  cerrar() {
    var resultado = Object.keys(this.todo.idempleado).length;


    if (resultado != 0) {

      this.solicitudes.cerrarAsiganar(this.IDregistro, this.todo.idempleado, 6)
        .then(
        data => {

          if (data["mensaje"] == "1") {
            this.showError("Se actualizo correctamente", "Aviso")
            if (this.pantalla == 1) {

              this.navCtrl.push(InicioPage);
            } else {
              this.navCtrl.push(SolicitudesPendientesPage);

            }
          } else {
            this.showError("Ya se encuentra registrado", "Aviso");
          }
        }
        )
        .catch(
        error => {
          console.log(error);
        }
        )


    } else {
      this.showError("Selecione a un Empleado", "Aviso");
    }

  }

  cambioEstado() {

    this.solicitudes.cambioEstado(this.idestado_empleado)
      .then(
      data => {

        if (data["mensaje"] == "1") {

          this.showError("Se actualizo correctamente", "Aviso")
          if (this.pantalla == 1) {

            this.navCtrl.push(InicioPage);
          } else {
            this.navCtrl.push(SolicitudesPendientesPage);

          }
        }
      }
      )
      .catch(
      error => {
        console.log(error);
      }
      )


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


  loadEmpleados() {

    return new Promise(resolve => {

      this.solicitudes.getEmpleados()
        .then(data => {

          this.empleados = data;

          //console.log(data);
          resolve(true);

        });

    });

  }

  getEstadosSolicitudes() {

    return new Promise(resolve => {

      this.solicitudes.getEstadosSolicitudes(this.IDregistro)
        .then(data => {

          this.estados = data;

          //console.log(data);
          resolve(true);

        });

    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccionSolicitudPage');

    this.viewCtrl.showBackButton(false);

  }

  anexos(IDregistro, tipo) {
    this.navCtrl.push(AnexosPage, { IDregistro: IDregistro, tipo: tipo,idempleado:this.idempleado });
  }


  getPagosUsuario() {

    
    return new Promise(resolve => {

      this.solicitudes.getPagosUsuario(this.idempleado, this.IDregistro)
        .then(data => {

          this.pagos = data;

          for (let person of data) {
            var anti = parseInt(person.anticipo);;
          
            this.sumita += anti;
          }
      

          resolve(true);

        });

    });



  }



}
