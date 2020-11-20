import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { ModalController, NavController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Storage } from '@ionic/storage';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import axios from 'axios';
import { ShareLocationPage } from '../share-location/share-location.page';
import { CameraOptions } from '@ionic-native/camera/ngx';





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
 
  contracts: string;
  titles: string;
  propdesc: string;
  config:any;
  
 

  alertController: AlertController;
  [x:string]:any;
  userImg: any = '';
  base64Img = '';
  

  location :any;
  image: any
  appointmentForm = new FormGroup({

    "Services": new FormControl('', Validators.required),
    "contracts": new FormControl('', Validators.required),
    "contracts1": new FormControl('', Validators.required),
    "problemDesc": new FormControl('', Validators.required),
  });


  constructor(public http: HttpClient,
    public navCtrl: NavController,
    private storage: Storage,
    private androidPermissions : AndroidPermissions,
    private locationAccuracy : LocationAccuracy,
    private alertService: AlertService ,
    private modctrl:ModalController 
  
  ) {

  }

  async ngOnInit() {
    await  this.storage.get('location').then(locationOfUser=>{
      if (locationOfUser){
    this.location= locationOfUser;
    console.log('user location is ', this.location)
    return;
  }

  })
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

    

    this.storage.get('userId').then(async id=>{

      this.url = "https://diamonddmc.com/hudhud/Scheduleadd.php?";
      this.url = this.url + "ReqeustDate=" + this.today +
        "&userid="+id+"&Service=" + this.appointmentForm.value.Services +
        "&contract=" + this.appointmentForm.value.contracts
        + "&title=" + this.appointmentForm.value.contracts1 +
        "&problemdesc=" + this.appointmentForm.value.problemDesc +
        "&Location="+ this.location+ "&imageapp="+ this.image

      this.config = {
        method: 'get',
        url: this.url,
        headers: { }
      };
      
      axios(this.config)
      .then( (response) => {
        this.usersList = response.data;
        
        console.log(JSON.stringify(response.data));
        this.alertService.presentToast("You Add new Appoinment");
        this.navCtrl.navigateRoot('/menu/menu/tabs/home');
      })
      .catch( (error) => {
        console.log(error);
      });

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

async openModal() {
  const modal = await this.modalController.create({
    component: ShareLocationPage
  });
  return await modal.present();
}
async captureImage(useAlbum: boolean) {
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    ...useAlbum ? {sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM} : {}
  }

  const imageData = await this.camera.getPicture(options);

  this.base64Image = `data:image/jpeg;base64,${imageData}`;

  this.photos.unshift(this.base64Image);

}



openeditprofiles() {
  let actionSheet = this.actionsheetCtrl.create({
    title: 'Option',
    cssClass: 'action-sheets-basic-page',
    buttons: [
      {
        text: 'Take photo',
        role: 'destructive',
        icon: !this.platform.is('ios') ? 'ios-camera-outline' : null,
        handler: () => {
          this.captureImage(false);
        }
      },
      {
        text: 'Choose photo from Gallery',
        icon: !this.platform.is('ios') ? 'ios-images-outline' : null,
        handler: () => {
          this.captureImage(true);
        }
      },
    ]
  });
  actionSheet.present();
}

  getMyLocation(){

    
   
    
    // this.checkGPSPermission()
    // this.geolocation.getCurrentPosition().then((resp) => {
    //   // resp.coords.latitude
    //   // resp.coords.longitude
    //   this.location.latitude =resp.coords.latitude;
    //   this.location.longitude =resp.coords.longitude;
    //   console.log('my location is ' ,  this.location)
    //  }).catch((error) => {
    //    console.log('Error getting location', error);
    //  });
     
    //  let watch = this.geolocation.watchPosition();
    //  watch.subscribe((data) => {
    //   //console.log('my data is ' , data)
    //  });
  }

      
  openCamera() {
    
   
   }


  
  async uploadFile($event) {

    console.log("Fileimage is",$event.target.files[0])
  //  this.image =$event.target.files[0]
     const reader = new FileReader();
   await  reader.addEventListener('load', (event: any) => {
      
          this.selectedFile = new ImageSnippet(event.target.result, $event.target.files[0]);
          this.image =event.target.result
        //   console.log('bufferImage',event.target.result)
           // event.target.result
          //   console.log('selectedFile',this.selectedFile.src.split(',')[1]);
             this.file = this.selectedFile.src.split(',')[1]
             
             
          });
      
        reader.readAsDataURL($event.target.files[0]);
        
        
  }
  uploadImageClick(){
    document.getElementById("file").click();
  }
  openeditprofile() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Option',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Take photo',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'ios-camera-outline' : null,
          handler: () => {
            this.captureImage(false);
          }
        },
        {
          text: 'Choose photo from Gallery',
          icon: !this.platform.is('ios') ? 'ios-images-outline' : null,
          handler: () => {
            this.captureImage(true);
          }
        },
      ]
    });
    actionSheet.present();
  }




}
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
