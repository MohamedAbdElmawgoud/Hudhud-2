import { Component, OnInit } from '@angular/core';
//import { MenuController, AlertController } from '@ionic/angular';
import {AlertController} from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common'
import { ModalController } from "@ionic/angular";


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
  scheduleData: any;
  dates;
  constructor(public alertController: AlertController,
    private storage: Storage,
    public modalController: ModalController,
    public datepipe: DatePipe,
    public http : HttpClient) {}

  url: string;

  //private companies = data;
  tableStyle ='bootstrap';


  ngOnInit() { //02/11/2020
    this.dates = '02/11/2020' //new Date().toISOString().split('T')[0];
    this.schedule()
  }
  /*Dependences *//*Dependences */
  
  
  schedule(){
  
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
   //  let options = new RequestOptions({ headers:headers,withCredentials: true});
     let options = {
      headers: headers
   }
   this.url ="https://diamonddmc.com/hudhud/schedule.php?"
   this.http.get(this.url  + "userid=1" + "&dates=" + this.dates, { headers: new HttpHeaders({
    'Authorization': '{data}',
    'Content-Type': 'application/json',
  }), responseType: 'text'}).subscribe(data =>  {
    console.log('my data: ', data);
    this.scheduleData = JSON.parse(data);
    
  })
  }

  filterSchedule(type){
    let latest_date =this.datepipe.transform(this.dates, 'dd/MM/yyyy');
    console.log(latest_date)
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
   //  let options = new RequestOptions({ headers:headers,withCredentials: true});
     let options = {
      headers: headers
   }
   this.storage.get('userId').then( id=>{ 
     console.log(this.dates)
    this.url ="https://diamonddmc.com/hudhud/schedule%20Filter.php?"
    this.http.get(this.url  + "userid="+ id + "&dates=" + this.dates+"&Service="+ type, { headers: new HttpHeaders({
     'Authorization': '{data}',
     'Content-Type': 'application/json',
   }), responseType: 'text'}).subscribe(data =>  {
     
    
     console.log('my data: ', data);
     this.scheduleData = JSON.parse(data);
   })

   })
  
  }



   getRowClass = (row) => {
    console.log('rowClass')
    const isComplete = row.company =='Complete';
   return {
     'Complete-row': isComplete ,
     'cancel-row':!isComplete ,
     'Working-row':!isComplete
   };
  }

 /* getRowClass(row)
  {
    console.log('class: ',row);
    const isComplete = row.company =='complete';

    if(!this.getRowClass)
    {
      return {}
    }
    return
    {
    //  'complete-row': isComplete ,
    //  'cancel-row' : !isComplete 
      
    }

  } */

 

/*Dependences */
 /* constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }
openMenu()
{
this.menuCtrl.toggle();
}*/


async presentAlertCheckbox() {
  const alert = await this.alertController.create({
    cssClass : 'background : black',
    header: 'Filter',
    message: `
    <br>
    
    <img src="assets/images/Icon1.png" style="margin-left: 30px;">
    <img src="assets/images/Icon2.png" style=" margin-left: 2%;">
    <img src="assets/images/Icon3.png" style=" margin-left: 2%;">
    <img src="assets/images/Icon4.png" style=" margin-left: 2%;">
    <br>
    <br>
    <img src="assets/images/Icon5.png" style=" margin-left: 2%;">
    <img src="assets/images/Icon6.png" style=" margin-left: 2%;">
    <img src="assets/images/Icon7.png" style=" margin-left: 2%;">
    <img src="assets/images/Icon8.png" style=" margin-left: 2%;">
   
    `,
    inputs: [
      {
        name: 'Landscaping',
        type: 'checkbox',
        label: 'Landscaping',
        value: 'Landscaping', 
        
       
        checked: true
      },
     
      {
        name: 'Pest Control',
        type: 'checkbox',
        label: 'Pest Control',
        value: 'Pest Control'
      },

      {
        name: 'Sterilization',
        type: 'checkbox',
        label: 'Sterilization',
        value: 'Sterilization'
      },

      {
        name: 'Rodent Control',
        type: 'checkbox',
        label: 'Rodent Control',
   
        value: 'Rodent Control'
      },

      {
        name: 'Cats and Dogs',
        type: 'checkbox',
        label: 'Cats and Dogs',
        value: 'Cats and Dogs'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: (alertData) => {
          console.log('Confirm Ok' ,alertData);
          this.filterSchedule(alertData)
        }
      }
    ]
  });

  await alert.present();
}

}
