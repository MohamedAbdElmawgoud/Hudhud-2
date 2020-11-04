import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Storage } from '@ionic/storage';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.page.html',
  styleUrls: ['./appointment.page.scss'],
})
export class AppointmentPage implements OnInit {
  selectedFile: any;

  queryText: string;
  divColor: string;
  url: string;
  token: any;
  today: string;
  //private storage: NativeStorage;
  films: Observable<any>;

  usersList: any[] = []
  private alertService: AlertService;

  contracts: string;
  titles: string;
  propdesc: string;

  alertController: AlertController;
  [x:string]:any;
  location = {latitude: 0 ,longitude:0}
  appointmentForm = new FormGroup({

    "Services": new FormControl('', Validators.required),
    "contracts": new FormControl('', Validators.required),
    "Title": new FormControl('', Validators.required),
    "problemDesc": new FormControl('', Validators.required),
  });


  constructor(public http: HttpClient,
    private geolocation: Geolocation,
    public navCtrl: NavController,
    private storage: Storage,
    private androidPermissions : AndroidPermissions,
    private locationAccuracy : LocationAccuracy,
    private nativeGeocoder: NativeGeocoder,
  
  ) {

  }

  ngOnInit() {
    this.getLocationName()
  }

  launchLocationPage() {

  }

  async Addappoint() {
    console.log(this.appointmentForm.value)
    this.today = new Date().toISOString();

    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');
    //  let options = new RequestOptions({ headers:headers,withCredentials: true});
    let options = {
      headers: headers
    }

    this.storage.get('userId').then( id=>{
      this.url = "https://diamonddmc.com/hudhud/Scheduleadd.php?";
      this.url = this.url + "ReqeustDate=" + this.today +
        "&userid="+id+"&Service=" + this.appointmentForm.value.Services +
        "&contract=" + this.appointmentForm.value.contracts
        + "&title=" + this.appointmentForm.value.Titles +
        "&problemdesc=" + this.appointmentForm.value.problemDesc +
        "&Location="+ this.location;
      this.http.get(this.url + '', {
        headers: new HttpHeaders({
          'Authorization': '{data}',
          'Content-Type': 'application/json',
        }), responseType: 'text'
      }).subscribe(data => {
        console.log('my data: ', data);
        //this.alertService.presentToast("You Add new Appoinment");
  
      })

     })
  




  }


checkGPSPermission() {
  this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
    result => {
      if (result.hasPermission) {

        //If having permission show 'Turn On GPS' dialogue
        this.askToTurnOnGPS();
      } else {

        //If not having permission ask for permission
        this.requestGPSPermission();
      }
    },
    err => {
      alert(err);
    }
  );
}
requestGPSPermission() {
  this.locationAccuracy.canRequest().then((canRequest: boolean) => {
    if (canRequest) {
      console.log("4");
    } else {
      //Show 'GPS Permission Request' dialogue
      this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
        .then(
          () => {
            // call method to turn on GPS
            this.askToTurnOnGPS();
          },
          error => {
            //Show alert if user click on 'No Thanks'
            alert('requestPermission Error requesting location permissions ' + error)
          }
        );
    }
  });
}

askToTurnOnGPS() {
  this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
    () => {
      // When GPS Turned ON call method to get Accurate location coordinates
     
    },
    error => alert('Error requesting location permissions ' + JSON.stringify(error))
  );
}
  getMyLocation(){
    this.checkGPSPermission()
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.location.latitude =resp.coords.latitude;
      this.location.longitude =resp.coords.longitude;
      console.log('my location is ' ,  this.location)
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      //console.log('my data is ' , data)
     });
  }
  uploadFile($event) {
    // console.log("image is",$event.target.files[0])
     const reader = new FileReader();
     reader.addEventListener('load', (event: any) => {
      
            this.selectedFile = new ImageSnippet(event.target.result, $event.target.files[0]);
      
           console.log(event.target.result)
             // console.log('selectedFile',this.selectedFile.src.split(',')[1]);
              this.file = this.selectedFile.src.split(',')[1]
             
             
          });
      
          reader.readAsDataURL($event.target.files[0]);
        
        
  }
  getLocationName(){
    console.log('start')
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
  };
  
  this.nativeGeocoder.reverseGeocode(30.0807424,31.261085400000002, options)
    .then((result: NativeGeocoderResult[]) => console.log(JSON.stringify(result[0])))
    .catch((error: any) => console.log(error));
  
  this.nativeGeocoder.forwardGeocode('Berlin', options)
    .then((result: NativeGeocoderResult[]) => console.log('The coordinates are latitude=' + result[0].latitude + ' and longitude=' + result[0].longitude))
    .catch((error: any) => console.log(error));
  }
}
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
