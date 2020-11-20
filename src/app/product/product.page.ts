import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { NavController } from '@ionic/angular';
import axios from 'axios';


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
  config:any;

  constructor(private router: Router, public http : HttpClient)
  {

    this.config = {
      method: 'get',
      url: 'https://diamonddmc.com/hudhud/items.php',
      headers: { }
    };
    
    axios(this.config)
    .then( (response) => {
      this.usersList = response.data;
      console.log(JSON.stringify(response.data));
    })
    .catch( (error) => {
      console.log(error);
    });
 
   
   }

   btncat1()
   {
    this.config = {
      method: 'get',
      url: 'https://diamonddmc.com/hudhud/itemsbycats.php?catid=1',
      headers: { }
    };
    
    axios(this.config)
    .then( (response) => {
      this.usersList = response.data;
      console.log(JSON.stringify(response.data));
    })
    .catch( (error) => {
      console.log(error);
    });
  
   }

   btncat2()
   {
    this.config = {
      method: 'get',
      url: 'https://diamonddmc.com/hudhud/itemsbycats.php?catid=2',
      headers: { }
    };
    
    axios(this.config)
    .then( (response) => {
      this.usersList = response.data;
      console.log(JSON.stringify(response.data));
    })
    .catch( (error) => {
      console.log(error);
    });
  
   }

   btncat3()
   {
    this.config = {
      method: 'get',
      url: 'https://diamonddmc.com/hudhud/itemsbycats.php?catid=3',
      headers: { }
    };
    
    axios(this.config)
    .then( (response) => {
      this.usersList = response.data;
      console.log(JSON.stringify(response.data));
    })
    .catch( (error) => {
      console.log(error);
    });
  
   }

   btncat4()
   {
    this.config = {
      method: 'get',
      url: 'https://diamonddmc.com/hudhud/itemsbycats.php?catid=4',
      headers: { }
    };
    
    axios(this.config)
    .then( (response) => {
      this.usersList = response.data;
      console.log(JSON.stringify(response.data));
    })
    .catch( (error) => {
      console.log(error);
    });
  
   }

   btncat5()
   {
    this.config = {
      method: 'get',
      url: 'https://diamonddmc.com/hudhud/itemsbycats.php?catid=1',
      headers: { }
    };
    
    axios(this.config)
    .then( (response) => {
      this.usersList = response.data;
      console.log(JSON.stringify(response.data));
    })
    .catch( (error) => {
      console.log(error);
    });
  
   }





   nextpage(id)
  {
    this.router.navigate(['/menu/menu/tabs/product-detail', { id:id}]);
  }

  ngOnInit() {
  }

}
