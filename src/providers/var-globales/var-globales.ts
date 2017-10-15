import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class VarGlobalesProvider {

  public ulr: string;
  public imgPendiente: string;
  public imgAprobados: string;
  public logo: string;
  public imgPerfil: string;
  constructor(public http: Http) {
    this.ulr = "http://127.0.0.1/Ave";
    this.imgAprobados=this.ulr+"/imgApp/unopng.png";
    this.imgPendiente=this.ulr+"/imgApp/dospng.png";
    this.logo=this.ulr+"/imgApp/logo.png";
    this.imgPerfil=this.ulr+"/imgApp/user_default.png";
   // this.ulr="http://desa.pvessy.com/Avedesa/";
  }

}
