import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController} from 'ionic-angular';
import { SolicitudesSevicioProvider } from '../../providers/solicitudes-sevicio/solicitudes-sevicio';
import { LoginServicioProvider } from '../../providers/login-servicio/login-servicio';
import { AccionSolicitudPage } from '../../pages/accion-solicitud/accion-solicitud';
import { DetallesPage } from '../../pages/detalles/detalles';



/**
 * Generated class for the InicioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {
  public idempleado: number;
  public offset: number = 0;
  public registros: any = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public solicitudes: SolicitudesSevicioProvider,
    public authx: LoginServicioProvider,
    private viewCtrl: ViewController) {
      
    this.initializeItems();
    this.idempleado = authx.currentUser.idempleado;
    this.offset = 0;
    this.loadPeople(this.idempleado, "");
  }

  loadPeople(idEmpleado, buscar) {
  
    return new Promise(resolve => {

      this.solicitudes.getSolicitudesInicio(idEmpleado, buscar, this.offset)
        .then(data => {
          
          for (let person of data) {
            this.registros.push(person);
          }

          resolve(true);

        });

    });

  }


  doInfinite(infiniteScroll) {

    this.offset += 5;
    setTimeout(() => {
      this.loadPeople(this.idempleado, "").then(() => {
        infiniteScroll.complete();
      });
    }, 500);
  }

  initializeItems(): void {
    let person = [];
    this.registros = person;
  }

  getItems(ev: any) {
    this.initializeItems();
    let val = ev.target.value;
    this.loadPeople(this.idempleado, val);


  }
  ionViewDidLoad() {
   this.viewCtrl.showBackButton(false);
  }

  acciones(IDregistro,estado,idestado_empleado,pantalla,idestado_registro) {
    this.navCtrl.push(AccionSolicitudPage, { IDregistro: IDregistro,
      estado: estado,
      idestado_empleado: idestado_empleado,
      pantalla: pantalla,
      idestado_registro:idestado_registro,
      tipoSolicitud:0});
  }
  detalles(IDregistro) {
    this.navCtrl.push(DetallesPage, { IDregistro: IDregistro });
  }

 
}
