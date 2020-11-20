import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { GoogleMaps } from '@ionic-native/google-maps';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Connectivity } from './providers/connectivity-service';
import { Network } from '@ionic-native/network/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DatePipe } from '@angular/common'


@NgModule({
  declarations: [AppComponent],
  
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot() 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Connectivity,
    AndroidPermissions,
    Geolocation,
    Geolocation,
    NativeGeocoder,
    LocationAccuracy,
    GoogleMaps,
    Camera,
    DatePipe,
   { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NativeStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}