import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user: any;

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

        let params = {...this.registerForm.value };
        console.log('parameters',params);
       
       await this.authService.register(this.registerForm.value).subscribe(
          
          data => {
            
              console.log('data',data)
             
              this.user = JSON.parse(data);
              if(this.user[0] == null ){
                return 0;
              }  
              else{
                
                this.navCtrl.navigateRoot('/home');
              }
                   
            
          },
          error => {
            console.log(error);
          },
          () => {
           
          //  this.router.navigate[('home')];
          }
        );
      }
      }

