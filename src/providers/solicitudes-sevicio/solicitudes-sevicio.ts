import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { VarGlobalesProvider } from '../var-globales/var-globales';

/*
  Generated class for the SolicitudesSevicioProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SolicitudesSevicioProvider {

  private url: string;
  // url = "http://adminave.pvessy.com/Ave";

  constructor(public http: Http, public varGlobal: VarGlobalesProvider) {
    this.url = varGlobal.ulr;

  }

   getAnexos(idregistro, buscar, tipo,offset) {



    return new Promise<any>(

      resolve => {
        this.http.get(this.url + "/app/mostraAnexos?idregistro=" + idregistro + "&buscar=" + buscar + "&offset=" + offset+"&tipo="+tipo)
          .map(res => res.json())
          .subscribe(
          data => {
            resolve(data);
          },
          err => {
            console.log(err);
          }
          )
      }
    );
  }

  getSolicitudesAprobados(idempleado, buscar, offset) {



    return new Promise<any>(

      resolve => {
        this.http.get(this.url + "/app/solicitudesAprobados?idempleado=" + idempleado + "&buscar=" + buscar + "&offset=" + offset)
          .map(res => res.json())
          .subscribe(
          data => {
            resolve(data);
          },
          err => {
            console.log(err);
          }
          )
      }
    );
  }


  getEmpleados() {

    return new Promise<any>(

      resolve => {
        this.http.get(this.url + "/app/listaempleados")
          .map(res => res.json())
          .subscribe(
          data => {
            resolve(data);
          },
          err => {
            console.log(err);
          }
          )
      }
    );
  }

  getEstadosSolicitudes(idregistro) {

    return new Promise<any>(

      resolve => {
        this.http.get(this.url + "/app/estadosIndividuales?idregistro=" + idregistro)
          .map(res => res.json())
          .subscribe(
          data => {
            resolve(data);
          },
          err => {
            console.log(err);
          }
          )
      }
    );
  }


  getSolicitudesInicio(idempleado, buscar, offset) {


    // console.log(this.url + "/app/solicitudesInicio?idempleado=" + idempleado + "&buscar=" + buscar + "&offset=" + offset);
    return new Promise<any>(

      resolve => {
        this.http.get(this.url + "/app/solicitudesInicio?idempleado=" + idempleado + "&buscar=" + buscar + "&offset=" + offset)
          .map(res => res.json())
          .subscribe(
          data => {
            resolve(data);
          },
          err => {
            console.log(err);
          }
          )
      }
    );
  }
  getSolicitudesPendientes(idempleado, buscar, offset) {



    return new Promise<any>(

      resolve => {
        this.http.get(this.url + "/app/solicitudesPedientes?idempleado=" + idempleado + "&buscar=" + buscar + "&offset=" + offset)
          .map(res => res.json())
          .subscribe(
          data => {
            resolve(data);
          },
          err => {
            console.log(err);
          }
          )
      }
    );
  }

  buscarSolicitud(idregistro) {
    return new Promise<any>(
      resolve => {
        this.http.get(this.url + "/app/buscar?idregistro=" + idregistro)
          .map(res => res.json())
          .subscribe(
          data => {
            resolve(data[0]);
          },
          err => {
            console.log(err);
          }
          )
      }
    );
  }

  buscarFechasSoli(idregistro) {
    return new Promise<any>(
      resolve => {
        this.http.get(this.url + "/app/buscarconsultarfechas?idregistro=" + idregistro)
          .map(res => res.json())
          .subscribe(
          data => {
            resolve(data);
          },
          err => {
            console.log(err);
          }
          )
      }
    );
  }

  cambioEstado(idestado_empleado) {
    return new Promise<any>(
      resolve => {
        this.http.get(this.url + "/app/actualizestado?idestado_empleado=" + idestado_empleado)
          .map(res => res.json())
          .subscribe(
          data => {
            resolve(data);
          },
          err => {
            console.log(err);
          }
          )
      }
    );
  }

  cerrarAsiganar(idregistro, idempleado, idestado_registro) {
    return new Promise<any>(
      resolve => {
        this.http.get(this.url + "/app/cerrarAsiganar?idregistro=" + idregistro + "&idempleado=" + idempleado + "&idestado_registro=" + idestado_registro)
          .map(res => res.json())
          .subscribe(
          data => {
            resolve(data);
          },
          err => {
            console.log(err);
          }
          )
      }
    );
  }
  comprobarcierre(idregistro, idestado_registro) {
    return new Promise<any>(
      resolve => {
        this.http.get(this.url + "/app/comprobarcierre?idregistro=" + idregistro + "&idestado_registro=" + idestado_registro)
          .map(res => res.json())
          .subscribe(
          data => {
            resolve(data);
          },
          err => {
            console.log(err);
          }
          )
      }
    );
  }
  comprobarIncial(idregistro, idestado_registro) {
    // console.log(this.url + "/app/comprobarIncial?idregistro=" + idregistro+"&idestado_registro="+idestado_registro);
    return new Promise<any>(
      resolve => {
        this.http.get(this.url + "/app/comprobarIncial?idregistro=" + idregistro + "&idestado_registro=" + idestado_registro)
          .map(res => res.json())
          .subscribe(
          data => {
            resolve(data);
          },
          err => {
            console.log(err);
          }
          )
      }
    );
  }

  getPagosUsuario(idempleado, idregistro) {
    // console.log(this.url + "/app/getPagosUsuario?idempleado=" + idempleado+"&idregistro="+idregistro);
    return new Promise<any>(
      resolve => {
        this.http.get(this.url + "/app/getPagosUsuario?idempleado=" + idempleado + "&idregistro=" + idregistro)
          .map(res => res.json())
          .subscribe(
          data => {
            resolve(data);
          },
          err => {
            console.log(err);
          }
          )
      }
    );
  }


  public registraPago(formPagos, usuario, idempleado, idregistro) {

    var headers = new Headers();

    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    var params = 'usuario=' + usuario + '&anticipo=' + formPagos.cantidad + '&descripcion=' + formPagos.descripcion + '&idempleado=' + idempleado + '&idregistro=' + idregistro;
   

    return new Promise(
      resolve => {
        this.http.post(this.url + "/app/registroPago", params, { headers: headers })
          .map(res => res.json())
          .subscribe(
          data => {
            resolve(data);
          },
          err => {
            console.log(err);
          }
          )
      }
    );
  }

    eliminarPago(idregistro, idpagos,usuario) {
    var headers = new Headers();

    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    var params = 'idregistro=' + idregistro + "&idpagos=" + idpagos+"&usuario="+usuario;
   

    return new Promise<any>(
      resolve => {
       this.http.post(this.url + "/app/eliminarPago", params, { headers: headers })
          .map(res => res.json())
          .subscribe(
          data => {
            resolve(data);
          },
          err => {
            console.log(err);
          }
          )
      }
    );
  }

}
