import { Component, OnInit, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.page.html',
  styleUrls: ['./sliders.page.scss'],
})
export class SlidersPage implements OnInit {

  constructor(private router: Router)
  {
   
   }
  @ViewChildren('slides') slides: IonSlides;
  buttonName = "Next";
  selectedSlide :any;
 
   slideOpts = {
    loop: true,
    autoplay: false
  };

  ngOnInit() {
  }

  ionSlideChange(slides){
    this.selectedSlide = slides;

    slides.getActiveIndex().then(
   (slidesIndex)=>{
            if (slidesIndex == 3){
              this.buttonName = "Continue";
              

            } else{
              this.buttonName = "Next";
        }
      });
  }

  next(){
    this.selectedSlide.getActiveIndex().then((slidesIndex) => {
      if(slidesIndex == 3){
        console.log("Done Slider");
        this.router.navigate(['menu/tabs/home']);
      } else {
        this.selectedSlide.slideNext();
      }
    });
  }

}
