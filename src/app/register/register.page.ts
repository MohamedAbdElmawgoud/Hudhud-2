import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { NavController } from "@ionic/angular";
import axios from 'axios';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: any;
  config:any;
  url:string;
  data = [] ;

  constructor( private authService: AuthService,private navCtrl: NavController,
               private router : Router
  ) { }

  ngOnInit() {
  }
  registerForm = new FormGroup({
    
        "email": new FormControl('', Validators.required),
        "password": new FormControl('', Validators.required),
        "Phone": new FormControl('', Validators.required),
      });

     async register(){

      this.url = 'https://diamonddmc.com/hudhud/Registiration.php?'
    // + 'name='+ data.email + '&pass='+ data.password +'&Fname=0'  + '&locname=0'  + '&phone='+data.Phone
    this.url = this.url + 
    'name='+ this.registerForm.value.email + '&pass='+ this.registerForm.value.password +'&Fname=0'  
    + '&locname=0'  + '&phone='+this.registerForm.value.Phone

    this.config = {
      method: 'get',
      url: this.url,
      headers: { }
    };
    
    axios(this.config)
    .then( (response) => {
      this.user = response.data;
      console.log(JSON.stringify(response.data));
      this.user = JSON.parse(response.data);
              

        })
    .catch( (error) => {
      console.log(error);
    });

    if(this.user[0] == null ){
      return 0;
    }  
    else{
      
      this.navCtrl.navigateRoot('/menu/menu/tabs/home');
    }

    
  
  }

      //   let params = {...this.registerForm.value };
      //   console.log('parameters',params);
       
      //  await this.authService.register(this.registerForm.value).subscribe(
          
      //     data => {
            
      //         console.log('data',data)
             
      //         this.user = JSON.parse(data);
      //         if(this.user[0] == null ){
      //           return 0;
      //         }  
      //         else{
                
      //           this.navCtrl.navigateRoot('/menu/menu/tabs/home');
      //         }
                   
            
      //     },
      //     error => {
      //       console.log(error);
      //     },
      //     () => {
           
      //     //  this.router.navigate[('home')];
      //     }
      //   );
      }
      

