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
  public ulrUplad: string;
  constructor(public http: Http) {
    //this.ulr = "http://127.0.0.1/Ave";
    //this.ulr="http://desa.pvessy.com/Avedesa";
    this.ulr="http://adminave.pvessy.com/Ave";
    this.ulrUplad="http://adminave.pvessy.com/ionic/upload.php";
    this.imgAprobados=this.ulr+"/imgApp/unopng.png";
    this.imgPendiente=this.ulr+"/imgApp/dospng.png";
    this.logo=this.ulr+"/imgApp/logo.png";
    this.imgPerfil=this.ulr+"/imgApp/user_default.png";
    
  }

}
