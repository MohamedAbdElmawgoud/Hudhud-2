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
import { ActivatedRoute } from "@angular/router";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-appointmentdetails',
  templateUrl: './appointmentdetails.page.html',
  styleUrls: ['./appointmentdetails.page.scss'],
})
export class AppointmentdetailsPage implements OnInit {
  date: any;
  id: any;

  queryText:string;
  divColor: string;
  url:string;
  token:any;
   films: Observable<any>;
  navCtrl: NavController;
  usersList:any[]=[]
  config:any;
  userid:string;
  data:any;
  name: any;
  detail: any;

  constructor(private route: ActivatedRoute,private datePipe: DatePipe) { }


  nextpage(id)
  {
    this.config = {
      method: 'get',
      url: 'https://diamonddmc.com/hudhud/ScheduleDetails.php?sid='+id,
      headers: { }
    };
    
    axios(this.config)
    .then( (response) => {
      this.data = response.data;
      this.data.forEach(element => {
        this.detail = element.problemdesc //Details
        this.name = element.title
        this.date = this.datePipe.transform(element.ReqeustDate,"yyyy-MM-dd")
      });
      //this.divColor = '#ff24af';
      console.log(JSON.stringify(response.data));
    })
    .catch( (error) => {
      console.log(error);
    });
  }

  async getService() {

    this.url = "https://diamonddmc.com/hudhud/Schedulefilter.php?";
    
    
     
    this.config = {
      method: 'get',
      url: this.url,
      headers: { }
    };
    
    axios(this.config)
    .then( (response) => {
      this.data = response.data;
      this.data.forEach(element => {
        this.detail = element.problemdesc //Details
        this.name = element.title
      });
      console.log(JSON.stringify(response.data));
    })
  }

 async ngOnInit() 
  {
    this.getService();
    this.id = await this.route.snapshot.params.id;
    this.nextpage(this.id)
    console.log(this.id)
  }

}
