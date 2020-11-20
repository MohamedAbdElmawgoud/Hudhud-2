import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedulefilter',
  templateUrl: './schedulefilter.page.html',
  styleUrls: ['./schedulefilter.page.scss'],
})
export class SchedulefilterPage implements OnInit {
  filtervalue = []
  constructor(
    private storage: Storage,
    private router :Router
  ) { }

  ngOnInit() {
   // this.filtervalue = []
  }
  checkCheckBoxvalue(event) {
    console.log(event.path[0].defaultValue)
    this.filtervalue.push(event.path[0].defaultValue)
  }

gotToSchdule(){
  if(this.filtervalue[0]){
    console.log(this.filtervalue)
    this.storage.set('filter', this.filtervalue)
  }

  this.router.navigate(['menu/menu/tabs/schedule'])
  
  setTimeout(function(){
    window.location.reload();
  },500);
  
}
}
