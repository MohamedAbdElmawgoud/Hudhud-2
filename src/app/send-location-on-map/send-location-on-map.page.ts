import { Component, OnInit, AfterContentInit, ViewChild, ElementRef } from '@angular/core';


declare var google : any;
@Component({
  selector: 'app-send-location-on-map',
  templateUrl: './send-location-on-map.page.html',
  styleUrls: ['./send-location-on-map.page.scss'],
})
export class SendLocationOnMapPage implements OnInit {
  map:any;
  geoAbdalaal:any;
  marker:any;
  searchTerm:any;
  locationSesstionFromGoogleMaps;

  @ViewChild('mapElement',{read:ElementRef,static:false}) mapElement:ElementRef;


  constructor() { }

  ngOnInit() {
  }
  setFilteredLocations(event){

  }
  ionViewDidEnter(){
    //32.5552896,35.8389018,
      const origin = { lat: 32.5552896, lng: 35.8389018 };
     this.geoAbdalaal= new google.maps.Geocoder();
    this.map = new google.maps.Map(
      this.mapElement.nativeElement,
      {
    
        
        zoom: 18,
        center: origin
         
        
  
      }
    );
   this.marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter(),
      drggable:true,
      title:'Place Session'
    });
    
    let content = "<h4>Information!</h4>";
  //  this.addMarker(this.map);
    console.log(this.map);
    // this.map.addListener('center_changed', ()=> {
    //   // 3 seconds after the center of the map has changed, pan back to the
    //   // marker.
    //   setTimeout(()=>{
    //     this.map.panTo(this.marker.getPosition());
    //   }, 3000);
    // });
  
    // this.marker.addListener('click', ()=>{
    //   this.map.setZoom(8);
    //   this.map.setCenter(this.marker.getPosition());
    // });
    this.map.addListener('click', (e)=>{
      this.placeMarkerAndPanTo(e.latLng, this.map);
    });


    //////////////////////
  }

  
  placeMarkerAndPanTo(position,map){
    // this.geoAbdalaal.geocode({
    //   latlng:position
      
    // },
    
    //   (responses)=>{
    //     if(responses && responses.length > 0){
    //       this.locationSesstionFromGoogleMaps=responses[0].formatted_address;
    //       console.log(responses);
    //     }else{
    //       console.log('someThing happend',)
    //     }
    //   }

   
    // );

    this.marker = new google.maps.Marker({
      position: position,
      map: map
    });
    
   this.map.panTo(position);
    console.log(this.marker.getPosition());
  }

}


