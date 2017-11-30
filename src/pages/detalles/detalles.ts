import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SolicitudesSevicioProvider } from '../../providers/solicitudes-sevicio/solicitudes-sevicio';
import { AccionSolicitudPage } from '../../pages/accion-solicitud/accion-solicitud';


/**
 * Generated class for the DetallesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detalles',
  templateUrl: 'detalles.html',
})
export class DetallesPage {

  private IDregistro: number;
  private registro: any;
 // private fechagaregistro: any;
  private FechaVisita: string;
  private FechaVisitaNom: string;
  private FechaAsignacion: string;
  private FechaAsignacionNom: string;
  private FechaCaptura: string;
  private FechaCapturaNom: string;
  private FechaCierre: string;
  private FechaCierreNom: string;
  private FechaInspeccion: string;
  private FechaInspeccionNom: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    public solicitudes: SolicitudesSevicioProvider) {
    this.registro = [];
    this.IDregistro = this.navParams.get('IDregistro');
    this.detalles();
    this.detallesFechas();
  }

  acciones() {
    this.navCtrl.push(AccionSolicitudPage, { IDregistro:this.IDregistro,
      estado: this.registro.estado,
      idestado_empleado: 123,//esto si se debe de modificr
      pantalla: 1,
      idestado_registro:this.registro.idestado_registro,
      tipoSolicitud:0});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallesPage');
    this.viewCtrl.showBackButton(false);
  }

  detalles() {
    this.solicitudes.buscarSolicitud(this.IDregistro)
      .then(data => {
        this.registro = data;
      }
      )
      .catch(
      error => {
        console.log(error);

      }
      )
  }
  detallesFechas() {
    this.solicitudes.buscarFechasSoli(this.IDregistro)
      .then(data => {

        for (let person of data) {
          if (person.idestado_registro == 2) {
            //Inspección
            this.FechaInspeccion = person.registro;
            this.FechaInspeccionNom = person.nombre;

          }
          else if (person.idestado_registro == 3) {
            //Entrega de visita
            this.FechaVisita = person.registro;
            this.FechaVisitaNom = person.nombre;

          }
          else if (person.idestado_registro == 4) {
            //Asiganción
            this.FechaAsignacion = person.registro;
            this.FechaAsignacionNom = person.nombre;
          }

          else if (person.idestado_registro == 5) {
            //Captura
            this.FechaCaptura = person.registro;
            this.FechaCapturaNom = person.nombre;

          }
          else if (person.idestado_registro == 6) {
            //Cierre
            this.FechaCierre = person.registro;
            this.FechaCierreNom = person.nombre;

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

}
