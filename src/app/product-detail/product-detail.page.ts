import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertService } from 'src/app/services/alert.service';
import nodemailer from 'nodemailer';
import axios from 'axios';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  itemName: any;
  Price: any;
  HeadLine: any;
  product: any;
  url: string;
  config:any;
  mailOptions:any;
  
  

  constructor(public http : HttpClient) { }

  ngOnInit() {
    this.productDetails()
  }
  // https://diamonddmc.com/hudhud/itemDetail.php?itemid=1

  productDetails(){
    this.config = {
      method: 'get',
      url: 'https://diamonddmc.com/hudhud/itemDetail.php?itemid=1',
      headers: { }
    };
    
    axios(this.config)
    .then( (response) => {
      this.product = response.data;
      this.product.forEach(element => {
        this.HeadLine = element.HeadLine;
        this.Price = element.Price
        this.itemName = element.itName
      });
      console.log(JSON.stringify(response.data));
    })
    .catch( (error) => {
      console.log(error);
    });
     
  }

sendmail()
  {
 
  }




}
