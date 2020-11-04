import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
  services: any;
  url: string;

  constructor(private http: HttpClient, private router: Router) {

  }
  nextpage(id) {
    this.router.navigate(['service-detail', { id:id}]);
  }

  ngOnInit() {
    this.getService()
  }
  async getService() {
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




    this.url = "https://diamonddmc.com/hudhud/Services.php?";

    await this.http.get(this.url + '', {
      headers: new HttpHeaders({
        'Authorization': '{data}',
        'Content-Type': 'application/json',
      }), responseType: 'text'
    }).subscribe(data => {

      console.log('my data: ', data);
      this.services = JSON.parse(data);
    })


  }

}
