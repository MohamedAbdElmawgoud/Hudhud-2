import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { map, tap } from 'rxjs/operators';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import axios from 'axios';


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
  films: Observable<any>;
  navCtrl: NavController;
  usersList:any[]=[]
  config:any;
  userid:string;
  data:any;
  itemsid:any;
  



  constructor(private http : HttpClient,private storage: Storage,private router: Router) { 

    this.storage.get('userId').then(async id=>{
      this.config = {
        method: 'get',
        url: 'https://diamonddmc.com/hudhud/home.php?id=' + id,
        headers: { }
      };

      axios(this.config)
      .then( (response) => {
        this.usersList = response.data;
        this.divColor = '#15de1c';
        console.log(JSON.stringify(response.data));
      })
      .catch( (error) => {
        console.log(error);
      });

    });
    
  




}

nextpage(id) {
 // console.log(id)
  this.router.navigate(['/menu/menu/tabs/appointmentdetails', { id:id}]);
}


btnAll()
{
  
  this.storage.get('userId').then(async id=>{
    //var axios = require('axios');
    
    this.config = {
  method: 'get',
  url: 'https://diamonddmc.com/hudhud/home.php?id=' + id,
  headers: { }
};
});
  
  axios(this.config)
  .then( (response) => {
    this.usersList = response.data;
    this.divColor = '#15de1c';
    console.log(JSON.stringify(response.data));
  })
  .catch( (error) => {
    console.log(error);
  });
}


btnLands()
{
  this.storage.get('userId').then(async id=>{
  this.config = {
    method: 'get',
    url: 'https://diamonddmc.com/hudhud/Schedulefilter.php?servname=landscaping&uid=' + id,
    headers: { }
  };
  
  axios(this.config)
  .then( (response) => {
    this.usersList = response.data;
    this.divColor = '#15de1c';
    console.log(JSON.stringify(response.data));
  })
  .catch( (error) => {
    console.log(error);
  });
});
 
}

btnPost()
{
  this.storage.get('userId').then(async id=>{

  this.config = {
    method: 'get',
    url: 'https://diamonddmc.com/hudhud/Schedulefilter.php?servname=Pest Control&uid='+ id,
    headers: { }
  };
  
  axios(this.config)
  .then( (response) => {
    this.usersList = response.data;
    this.divColor = '#e69150';
    console.log(JSON.stringify(response.data));
  })
  .catch( (error) => {
    console.log(error);
  });
});
 
}


btnsetril()
{
  this.storage.get('userId').then(async id=>{
  this.config = {
    method: 'get',
    url: 'https://diamonddmc.com/hudhud/Schedulefilter.php?servname=Sterilization&uid='+id,
    headers: { }
  };
  
  axios(this.config)
  .then( (response) => {
    this.usersList = response.data;
    this.divColor = '#24a7ff';
    console.log(JSON.stringify(response.data));
  })
  .catch( (error) => {
    console.log(error);
  });
});
 
}

btnRodent()
{
  this.storage.get('userId').then(async id=>{
  this.config = {
    method: 'get',
    url: 'https://diamonddmc.com/hudhud/Schedulefilter.php?servname=Rodent Control&uid=' + id,
    headers: { }
  };
  
  axios(this.config)
  .then( (response) => {
    this.usersList = response.data;
    this.divColor = '#ff2c24';
    console.log(JSON.stringify(response.data));
  })
  .catch( (error) => {
    console.log(error);
  });
});
 
}

btnCats()
{
  this.storage.get('userId').then(async id=>{
  this.config = {
    method: 'get',
    url: 'https://diamonddmc.com/hudhud/Schedulefilter.php?servname=Cats and Dogs&uid='+id,
    headers: { }
  };
  
  axios(this.config)
  .then( (response) => {
    this.usersList = response.data;
    this.divColor = '#ff24af';
    console.log(JSON.stringify(response.data));
  })
  .catch( (error) => {
    console.log(error);
  });
});
 
}

async getService() {

  this.url = "https://diamonddmc.com/hudhud/ServicesDetail.php?";
  
  this.url = "https://diamonddmc.com/hudhud/Services.php?";
   
  this.config = {
    method: 'get',
    url: this.url,
    headers: { }
  };
  
  axios(this.config)
  .then( (response) => {
    this.data = response.data;
    this.data.forEach(element => {
      this.itemsid = element.id
      this.storage.set('itemsid',this.itemsid)
    });
    
    console.log(JSON.stringify(response.data));
  })

}

    

  ngOnInit()
   {
     this.getService();
   }
  
 
}
