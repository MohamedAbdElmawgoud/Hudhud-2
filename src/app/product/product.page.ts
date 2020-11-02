import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  queryText:string;
  divColor: string;
  url:string;
  token:any;
  private storage: NativeStorage;
  films: Observable<any>;
  navCtrl: NavController;
  usersList:any[]=[]

  constructor(private router: Router, public http : HttpClient)
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
   this.url ="https://diamonddmc.com/hudhud/items.php";
   this.http.get(this.url  + '', { headers: new HttpHeaders({
    'Authorization': '{data}',
    'Content-Type': 'application/json',
  }), responseType: 'text'}).subscribe(data =>  {
    console.log('my data: ', data);
    this.usersList = JSON.parse(data);
  })
   
   }

   btncat1()
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
   this.url ="https://diamonddmc.com/hudhud/temsbycats.php?catid=1";
   this.http.get(this.url  + '', { headers: new HttpHeaders({
    'Authorization': '{data}',
    'Content-Type': 'application/json',
  }), responseType: 'text'}).subscribe(data =>  {
    console.log('my data: ', data);
    this.usersList = JSON.parse(data);
  })
   }

   btncat2()
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
   this.url ="https://diamonddmc.com/hudhitemsbycats.php?catid=2";
   this.http.get(this.url  + '', { headers: new HttpHeaders({
    'Authorization': '{data}',
    'Content-Type': 'application/json',
  }), responseType: 'text'}).subscribe(data =>  {
    console.log('my data: ', data);
    this.usersList = JSON.parse(data);
  })
   }

   btncat3()
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
   this.url ="https://diamonddmc.com/hudhitemsbycats.php?catid=3";
   this.http.get(this.url  + '', { headers: new HttpHeaders({
    'Authorization': '{data}',
    'Content-Type': 'application/json',
  }), responseType: 'text'}).subscribe(data =>  {
    console.log('my data: ', data);
    this.usersList = JSON.parse(data);
  })
   }

   btncat4()
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
   this.url ="https://diamonddmc.com/hudhitemsbycats.php?catid=4";
   this.http.get(this.url  + '', { headers: new HttpHeaders({
    'Authorization': '{data}',
    'Content-Type': 'application/json',
  }), responseType: 'text'}).subscribe(data =>  {
    console.log('my data: ', data);
    this.usersList = JSON.parse(data);
  })
   }

   btncat5()
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
   this.url ="https://diamonddmc.com/hudhud/itemsbycats.php?catid=5";
   this.http.get(this.url  + '', { headers: new HttpHeaders({
    'Authorization': '{data}',
    'Content-Type': 'application/json',
  }), responseType: 'text'}).subscribe(data =>  {
    console.log('my data: ', data);
    this.usersList = JSON.parse(data);
  })
   }





   nextpage()
  {
    this.router.navigate(['product-detail']);
  }

  ngOnInit() {
  }

}
