import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import axios from 'axios';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  url: string;
  navCtrl: any;
  config:any;
  FirstName;
  Phone;
  LocationName;
  point;
  CameraOptions:any;
  data = [] ;
  clickedImage: string;
  options: CameraOptions = {
    quality: 30,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  
  myphoto: string;
  constructor(public http: HttpClient,
    public alertController: AlertController,
    private storage: Storage,private camera: Camera
  ) {}
 async ngOnInit() {
   this.Getprofileinfo()
  }

  async Getprofileinfo() {
    // console.log(NewPassword)
   
     this.storage.get('userId').then(async id=>{
      this.url = "https://diamonddmc.com/hudhud/Getprofileinfo.php?";
      this.url = this.url + 
        "userid="+ id 

      this.config = {
        method: 'get',
        url: this.url,
        headers: { }
      };
      
      axios(this.config)
      .then( (response) => {
        this.data = response.data;
        console.log(JSON.stringify(response.data));
        this.data.forEach(element => {
          console.log('my data: ',  element);
  
          this.FirstName = element.FirstName
          this.Phone = element.Phone
          this.LocationName = element.LocationName
          this.point = element.point
        });
      })
      .catch( (error) => {
        console.log(error);
      });
 

    
    })
    
 
 
 
 
   }
 

 
  

  async changePassword(NewPassword) {
   // console.log(NewPassword)
  

    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept', 'application/json');
    headers.append('content-type', 'application/json');
    //  let options = new RequestOptions({ headers:headers,withCredentials: true});
    let options = {
      headers: headers
    }

    this.storage.get('userId').then(async id=>{ 


      this.url = "https://diamonddmc.com/hudhud/changepassword.php?";
      this.url = this.url + 
        "userid=" +id +"&pass=" + NewPassword + '';

        this.url = "https://diamonddmc.com/hudhud/Getprofileinfo.php?";
      this.url = this.url + 
        "userid="+ id 

      this.config = {
        method: 'get',
        url: this.url,
        headers: { }
      };
      
      axios(this.config)
      .then( (response) => {
       
        console.log(JSON.stringify(response.data));
      })
        
    //  await this.http.get(this.url + '', {
    //     headers: new HttpHeaders({
    //       'Authorization': '{data}',
    //       'Content-Type': 'application/json',
    //     }), responseType: 'text'
    //   }).subscribe(data => {
       
    //     console.log('my data: ', data);
         
       })
    

  }




  async updateProfile(InfoProfile) {
    //console.log(InfoProfile)
   // userid=1&Fname=yousef&locname=amman&phone=0795247996

   
    this.storage.get('userId').then(async id=>{ 

      this.url = "https://diamonddmc.com/hudhud/updateprofile.php?";
      this.url = this.url + 
        "userid="+id+"&Fname=" + InfoProfile.Fname +"&locname=" +InfoProfile.location +
        "&phone=" + InfoProfile.phone

        this.config = {
          method: 'get',
          url: this.url,
          headers: { }
        };
        
        axios(this.config)
        .then( (response) => {
         
          console.log(JSON.stringify(response.data));
        })
        
    //  await this.http.get(this.url + '', {
    //     headers: new HttpHeaders({
    //       'Authorization': '{data}',
    //       'Content-Type': 'application/json',
    //     }), responseType: 'text'
    //   }).subscribe(data => {
    //     console.log('my data: ', data);
       
  
    //   })
    })
   




  }

  async presentNotification() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Notification',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Notification on',
          value: 'value1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Notification off',
          value: 'value2'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentLanguage() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Language',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'English',
          value: 'value1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Arabic',
          value: 'value2'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

 
  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Edit Profile',
      inputs: [
        {
          name: 'Fname',
          type: 'text',
          placeholder: 'Change your name'
        },
     
       {
          name: 'phone',
          placeholder: 'Change your number',
          type: 'number',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 10,
            inputmode: 'int'
          }
        },
        {
          name: 'location',
          type: 'text',
          placeholder: 'Change your Location'
        }
        
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            this.updateProfile(data)
            console.log('Confirm Ok', data);
          }
        }
      ]
    });

    await alert.present();
  }


  async presentPassword() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Change Password',
      inputs: [
      
        {
          name: 'oldPassword',
          type: 'password',
          placeholder: 'Old Password',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 10,
            inputmode: 'decimal'
          }
        },
        {
          name: 'newPassword',
          type: 'password',
          placeholder: 'New Password',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 10,
            inputmode: 'decimal'
          }
        }
        ,
        {
          name: 'newPassword',
          type: 'password',
          placeholder: 'Confirm New Password',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 10,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            this.changePassword(data.newPassword)
            console.log('Confirm Ok',data);
          }
        }
      ]
    });

    await alert.present();
  }

changeimg()
{
  this.camera.getPicture(this.options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
    let base64Image = 'data:image/jpeg;base64,' + imageData;
    this.clickedImage = base64Image;
  }, (err) => {
    console.log(err);
    // Handle error
  });
}


}
