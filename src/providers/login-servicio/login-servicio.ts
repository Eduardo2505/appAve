import { Injectable } from '@angular/core';
import { Http, URLSearchParams ,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { VarGlobalesProvider } from '../var-globales/var-globales';
import { Platform } from 'ionic-angular'
import { Storage } from '@ionic/storage';


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
  public nameStringe: string;
  public emailStringe: string;
  public idempleadoStringe: string;
  public banderaStronge: boolean = false;


  constructor(public http: Http,
    public varGlobal: VarGlobalesProvider,
    private platform: Platform,
    private storage: Storage) {
    this.url = varGlobal.ulr;

  }



  public actualizarPass(id, dato) {
   
    let datax = new URLSearchParams();
    datax.append("idempleado", id);
    datax.append("passworduno", dato.value.pass2);
    let url = this.url + '/app/actualizarPass';

    return new Promise(
      resolve => {
        this.http.post(url,datax)
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

  public postLogin(credentials) {

    

    var params = 'email=' + credentials.email 
    + '&password=' + credentials.password;

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    let url = this.url + '/app/login';
    return new Promise(
      resolve => {
        this.http.post(url,params, { headers:headers })
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


  public sesionUserStronge(usuario, email, idempleado) {

    this.currentUser = new User(usuario, email, idempleado);

  }
  public sesionUser(usuario, email, idempleado) {

    this.guardarStorage(usuario, email, idempleado);
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
      this.remover();
    });
  }

  remover() {


    if (this.platform.is("cordova")) {

      this.storage.remove('usuario');
      this.storage.remove('email');
      this.storage.remove('idempleado');
    } else {

      localStorage.removeItem('usuario');
      localStorage.removeItem('email');
      localStorage.removeItem('idempleado');

    }
    this.banderaStronge = false;

  }

  guardarStorage(usuario, email, idempleado) {


    if (this.platform.is("cordova")) {

      this.storage.set('usuario', usuario);
      this.storage.set('email', email);
      this.storage.set('idempleado', idempleado);
    } else {

      console.log("Entro a guardar Storige");

      localStorage.setItem('usuario', usuario);
      localStorage.setItem('email', email);
      localStorage.setItem('idempleado', idempleado);

    }

  }


  cargarStorage() {

    if (this.platform.is("cordova")) {

      this.storage.ready()
        .then(() => {
          this.storage.get('idempleado')
            .then((idempleado) => {
              if (idempleado) {
                this.idempleadoStringe = idempleado;
              }
            });

          this.storage.get('usuario')
            .then((usuario) => {
              if (usuario) {
                this.nameStringe = usuario;
              }
            });

          this.storage.get('email')
            .then((email) => {
              if (email) {
                this.emailStringe = email;
              }
            });
          // Sirve para comprobar
          this.storage.get('idempleado')
            .then((idempleado) => {
              if (idempleado) {


                this.banderaStronge = true;
                this.sesionUserStronge(this.nameStringe, this.emailStringe, this.idempleadoStringe);

              } else {
                this.remover();

              }
            });




        });




    } else {



      if (localStorage.getItem("idempleado")) {

        this.idempleadoStringe = localStorage.getItem("idempleado");

      }
      if (localStorage.getItem("usuario")) {

        this.nameStringe = localStorage.getItem("usuario");

      }

      if (localStorage.getItem("email")) {

        this.emailStringe = localStorage.getItem("email");

      }

      if (localStorage.getItem("idempleado")) {

        this.banderaStronge = true;
        this.sesionUserStronge(this.nameStringe, this.emailStringe, this.idempleadoStringe);
      } else {

        this.remover();
      }



    }

  }
}