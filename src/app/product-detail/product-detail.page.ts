import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  constructor(public http : HttpClient) { }

  ngOnInit() {
    this.productDetails()
  }
  // https://diamonddmc.com/hudhud/itemDetail.php?itemid=1

  productDetails(){
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
   //  let options = new RequestOptions({ headers:headers,withCredentials: true});
     let options = {
      headers: headers
   }
   this.url ="https://diamonddmc.com/hudhud/items.php?";
   this.http.get(this.url  + 'itemid=1', { headers: new HttpHeaders({
    'Authorization': '{data}',
    'Content-Type': 'application/json',
  }), responseType: 'text'}).subscribe(data =>  {
    console.log('my data: ', data);
    this.product = JSON.parse(data);
    this.product.forEach(element => {
      this.HeadLine = element.HeadLine;
      this.Price = element.Price
      this.itemName = element.itName
    });
    
  })
  }
}
