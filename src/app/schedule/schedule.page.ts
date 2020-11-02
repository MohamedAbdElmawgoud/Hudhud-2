import { Component, OnInit } from '@angular/core';
//import { MenuController, AlertController } from '@ionic/angular';
//import data from '../../assets/company.json';
import {AlertController} from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
  scheduleData: any;

  constructor(public alertController: AlertController,public http : HttpClient) {}

  url: string;

  //private companies = data;
  tableStyle ='bootstrap';


  ngOnInit() {
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
   this.http.get(this.url  + "userid=1" + "&dates=02/11/2020", { headers: new HttpHeaders({
    'Authorization': '{data}',
    'Content-Type': 'application/json',
  }), responseType: 'text'}).subscribe(data =>  {
    console.log('my data: ', data);
    this.scheduleData = JSON.parse(data);
    
  })
  }

  filterSchedule(){
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
   //  let options = new RequestOptions({ headers:headers,withCredentials: true});
     let options = {
      headers: headers
   }
   this.url ="https://diamonddmc.com/hudhud/schedule%20Filter.php?"
   this.http.get(this.url  + "userid=1" + "&dates=02/11/2020"+"&Service=Landscaping", { headers: new HttpHeaders({
    'Authorization': '{data}',
    'Content-Type': 'application/json',
  }), responseType: 'text'}).subscribe(data =>  {
    
   
    console.log('my data: ', data);
    
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
    cssClass: 'my-custom-class',
    header: 'Filter',
    inputs: [
      {
        name: 'checkbox1',
        type: 'checkbox',
        label: 'Checkbox 1',
        value: 'value1',
        checked: true
      },

      {
        name: 'checkbox2',
        type: 'checkbox',
        label: 'Checkbox 2',
        value: 'value2'
      },

      {
        name: 'checkbox3',
        type: 'checkbox',
        label: 'Checkbox 3',
        value: 'value3'
      },

      {
        name: 'checkbox4',
        type: 'checkbox',
        label: 'Checkbox 4',
    //  annimated: ' assets/images/Mask Group 20.png' ,
  //  message: '<img src="assets/images/Mask Group 20.png">',
        value: 'value4'
      },

      {
        name: 'checkbox5',
        type: 'checkbox',
        label: 'Checkbox 5',
        value: 'value5'
      },

      {
        name: 'checkbox6',
        type: 'checkbox',
        label: 'Checkbox 6 ',
        value: 'value6'
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
        handler: () => {
          console.log('Confirm Ok');
        }
      }
    ]
  });

  await alert.present();
}

}
