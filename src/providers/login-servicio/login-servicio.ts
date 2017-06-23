import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { VarGlobalesProvider } from '../var-globales/var-globales';



export class User {
  name: string;
  email: string;
  idempleado: number;

  constructor(name: string, email: string, idempleado: number) {
    this.name = name;
    this.email = email;
    this.idempleado = idempleado;
  }
}
@Injectable()
export class LoginServicioProvider {

  currentUser: User;

  public url: string;
  // url = "http://adminave.pvessy.com/Ave";


  constructor(public http: Http, public varGlobal: VarGlobalesProvider) {
    this.url = varGlobal.ulr;
   
  }


  public postLogin(credentials) {

    var headers = new Headers();

    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    //   var params = 'email=' + credentials.email + '&password=' + credentials.password;
    var params = 'email=beto.soren@gmail.com&password=123';

    return new Promise(
      resolve => {
        this.http.post(this.url + "/app/login", params, { headers: headers })
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

  public sesionUser(usuario, email, idempleado) {
    return Observable.create(observer => {
      let access = true;
      this.currentUser = new User(usuario, email, idempleado);
      observer.next(access);
      observer.complete();
    });

  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }


}