import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.page.html',
  styleUrls: ['./service-detail.page.scss'],
})
export class ServiceDetailPage implements OnInit {
  id: any;
  name: any;
  detail: any;
  data: any;
  url: string;

  constructor( private http: HttpClient,
    
    private route: ActivatedRoute) { }

 async ngOnInit() {
    this.id = await this.route.snapshot.params.id;
    console.log(this.id)
    this.getService(this.id )
  }
  async getService(id) {
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




    this.url = "https://diamonddmc.com/hudhud/ServicesDetail.php?";

    await this.http.get(this.url + 'id='+ id, {
      headers: new HttpHeaders({
        'Authorization': '{data}',
        'Content-Type': 'application/json',
      }), responseType: 'text'
    }).subscribe(data => {
      this.data = JSON.parse(data); 
      console.log('my data: ', this.data);
      this.data.forEach(element => {
        this.detail = element.Details //Details
        this.name = element.Name
      });

      // console.log('my data: ', data);

    })


  }
}
