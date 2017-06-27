import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class VarGlobalesProvider {

  public ulr: string;

  constructor(public http: Http) {
    //this.ulr = "http://127.0.0.1/Avedesa";
   this.ulr="http://desa.pvessy.com/Avedesa/";
  }

}
