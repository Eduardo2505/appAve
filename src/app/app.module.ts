import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//================================== Nuevos ======================

/* ================= Modulos ======================== */
import { HttpModule } from '@angular/http';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { ImagePicker } from '@ionic-native/image-picker';
import { InAppBrowser } from '@ionic-native/in-app-browser';

//Son externos
import { LoginServicioProvider } from '../providers/login-servicio/login-servicio';
import { VarGlobalesProvider } from '../providers/var-globales/var-globales';
import { SolicitudesSevicioProvider } from '../providers/solicitudes-sevicio/solicitudes-sevicio';


//paginas
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
//pipe
import { FechaLarga  } from '../pipe/capitalize.pipe';
import { IonicStorageModule } from '@ionic/storage';

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
    LoginPage,
    FechaLarga
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
    FileTransfer,
    ImagePicker,
    InAppBrowser,
    FileTransferObject,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginServicioProvider, SolicitudesSevicioProvider,
    VarGlobalesProvider
  ]
})
export class AppModule {}
