import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  queryText:string;
  divColor: string;
  url:string;
  token:any;
  private storage: NativeStorage;
  films: Observable<any>;
  navCtrl: NavController;
  usersList:any[]=[]

  constructor(private http : HttpClient) { 


    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
   //  let options = new RequestOptions({ headers:headers,withCredentials: true});
     let options = {
      headers: headers
   }
   this.url ="https://diamonddmc.com/hudhud/home.php";
   this.http.get(this.url  + '', { headers: new HttpHeaders({
    'Authorization': '{data}',
    'Content-Type': 'application/json',
  }), responseType: 'text'}).subscribe(data =>  {
    console.log('my data: ', data);
    this.usersList = JSON.parse(data);
  })
  this.divColor = '#15de1c';
}


btnAll()
{
  var headers = new Headers();
  headers.append('Access-Control-Allow-Origin' , '*');
  headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
  headers.append('Accept','application/json');
  headers.append('content-type','application/json');
 //  let options = new RequestOptions({ headers:headers,withCredentials: true});
   let options = {
    headers: headers
 }
 this.url ="https://diamonddmc.com/hudhud/Schedule.php";
 this.http.get(this.url  + '', { headers: new HttpHeaders({
  'Authorization': '{data}',
  'Content-Type': 'application/json',
}), responseType: 'text'}).subscribe(data =>  {
 // console.log('my data: ', data);
  this.usersList = JSON.parse(data);
})



 this.divColor = '#15de1c';




}


btnLands()
{
  this.divColor ='#15de1c';
  var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
   //  let options = new RequestOptions({ headers:headers,withCredentials: true});
     let options = {
      headers: headers
   }
   this.url ="https://diamonddmc.com/hudhud/Schedulefilter.php?servname=landscaping";
   this.http.get(this.url  + '', { headers: new HttpHeaders({
    'Authorization': '{data}',
    'Content-Type': 'application/json',
  }), responseType: 'text'}).subscribe(data =>  {
    console.log('my data: ', data);
    this.usersList = JSON.parse(data);
  })
}

btnPost()
{
  this.divColor ='#e69150';
  var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
   //  let options = new RequestOptions({ headers:headers,withCredentials: true});
     let options = {
      headers: headers
   }
   this.url ="https://diamonddmc.com/hudhud/Schedulefilter.php?servname=Pest Control";
   this.http.get(this.url  + '', { headers: new HttpHeaders({
    'Authorization': '{data}',
    'Content-Type': 'application/json',
  }), responseType: 'text'}).subscribe(data =>  {
    console.log('my data: ', data);
    this.usersList = JSON.parse(data);
  })
}


btnsetril()
{
  this.divColor ='#24a7ff';
  var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
   //  let options = new RequestOptions({ headers:headers,withCredentials: true});
     let options = {
      headers: headers
   }
   this.url ="https://diamonddmc.com/hudhud/Schedulefilter.php?servname=Sterilization";
   this.http.get(this.url  + '', { headers: new HttpHeaders({
    'Authorization': '{data}',
    'Content-Type': 'application/json',
  }), responseType: 'text'}).subscribe(data =>  {
    console.log('my data: ', data);
    this.usersList = JSON.parse(data);
  })
}

btnRodent()
{
  this.divColor ='#ff2c24';
  var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
   //  let options = new RequestOptions({ headers:headers,withCredentials: true});
     let options = {
      headers: headers
   }
   this.url ="https://diamonddmc.com/hudhud/Schedulefilter.php?servname=Rodent Control";
   this.http.get(this.url  + '', { headers: new HttpHeaders({
    'Authorization': '{data}',
    'Content-Type': 'application/json',
  }), responseType: 'text'}).subscribe(data =>  {
    console.log('my data: ', data);
    this.usersList = JSON.parse(data);
  })

}

btnCats()
{
  this.divColor ='#ff24af';
  var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
   //  let options = new RequestOptions({ headers:headers,withCredentials: true});
     let options = {
      headers: headers
   }
   this.url ="https://diamonddmc.com/hudhud/Schedulefilter.php?servname=Cats and Dogs";
   this.http.get(this.url  + '', { headers: new HttpHeaders({
    'Authorization': '{data}',
    'Content-Type': 'application/json',
  }), responseType: 'text'}).subscribe(data =>  {
    console.log('my data: ', data);
    this.usersList = JSON.parse(data);
  })
}

    //this.url = "https://diamonddmc.com/hodhodwebservice/WS_hodhod.asmx/GetscheduleForClient?userid=1";
    /*this.url ="https://diamonddmc.com/hudhud/Schedule.php";

    this.films = this.httpClient.get(this.url);
    this.films
    .subscribe(data =>  {
      console.log('my data: ', data);
      this.usersList = data.data
      //JSON.parse(data.data)
      // = data.data
      
    })*/


  

  ngOnInit() {
  }
  
 
}
