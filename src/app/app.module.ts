import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';

import { LoginServicioProvider } from '../providers/login-servicio/login-servicio';
import { VarGlobalesProvider } from '../providers/var-globales/var-globales';
import { SolicitudesSevicioProvider } from '../providers/solicitudes-sevicio/solicitudes-sevicio';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DetallesPage } from '../pages/detalles/detalles';
import { InicioPage } from '../pages/inicio/inicio';
import { ContactoPage } from '../pages/contacto/contacto';
import { SolicitudesPendientesPage } from '../pages/solicitudes-pendientes/solicitudes-pendientes';
import { SolicitudesAprobadasPage } from '../pages/solicitudes-aprobadas/solicitudes-aprobadas';
import { AccionSolicitudPage } from '../pages/accion-solicitud/accion-solicitud';
import { SubSolicitudesPage } from '../pages/sub-solicitudes/sub-solicitudes';
import { AjustesPage } from '../pages/ajustes/ajustes';
import { PerfilPage } from '../pages/perfil/perfil';
import { AnexosPage } from '../pages/anexos/anexos';
import { MenuDesplegablePage } from '../pages/menu-desplegable/menu-desplegable';


import { LoginPage } from '../pages/login/login';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { ImagePicker } from '@ionic-native/image-picker';

import { IonicStorageModule } from '@ionic/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    DetallesPage,
    InicioPage,
    ContactoPage,
    SolicitudesPendientesPage,
    AccionSolicitudPage,
    SubSolicitudesPage,
    AjustesPage,
    PerfilPage,
    MenuDesplegablePage,
    AnexosPage,
    SolicitudesAprobadasPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DetallesPage,
    InicioPage,
    ContactoPage,
    SolicitudesPendientesPage,
    AccionSolicitudPage,
    SubSolicitudesPage,
    AjustesPage,
    PerfilPage,
    TabsPage,
    MenuDesplegablePage,
    SolicitudesAprobadasPage,
    AnexosPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Transfer,
    ImagePicker,
    InAppBrowser,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LoginServicioProvider, SolicitudesSevicioProvider,
    VarGlobalesProvider
  ]
})
export class AppModule { }
