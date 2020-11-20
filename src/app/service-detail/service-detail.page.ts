import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.page.html',
  styleUrls: ['./service-detail.page.scss'],
})
export class ServiceDetailPage implements OnInit {
  name: any;
  detail: any;
  data: any;
  url: string;
  config:any;

  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.getService()
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
            this.detail = element.Details //Details
            this.name = element.Name
          });
      console.log(JSON.stringify(response.data));
    })







    // console.log(NewPassword)


    // var headers = new Headers();
    // headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    // headers.append('Accept', 'application/json');
    // headers.append('content-type', 'application/json');
    // //  let options = new RequestOptions({ headers:headers,withCredentials: true});
    // let options = {
    //   headers: headers
    // }




    // this.url = "https://diamonddmc.com/hudhud/ServicesDetail.php?";

    // await this.http.get(this.url + 'id=54', {
    //   headers: new HttpHeaders({
    //     'Authorization': '{data}',
    //     'Content-Type': 'application/json',
    //   }), responseType: 'text'
    // }).subscribe(data => {
    //   this.data = JSON.parse(data); 
    //   this.data.forEach(element => {
    //     this.detail = element.Details //Details
    //     this.name = element.Name
    //   });

    //   console.log('my data: ', data);

    // })


  }
}
