import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
declare var checkLoginState: any;

import 'src/assets/JS/loginFace.js'


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})



export class LoginPage  {
  id: any;
  user: any;


  loginForm = new FormGroup({
    
        "email": new FormControl('', Validators.required),
        "password": new FormControl('', Validators.required),
      });

      
  public theTodo: any;

  items:any;
  usersList:any[]=[]
  txtusername: string;
  txtPassword: string;
  URLs:string;



  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
    private storage: Storage
  ) { }

  ngOnInit() {
  }

  // Dismiss Login Modal
  dismissLogin() {
    this.modalController.dismiss();
  }
async loginFace(){
  let res =  checkLoginState()
}
  // // On Register button tap, dismiss login modal and open register modal
  // async registerModal() {
  //   this.dismissLogin();
  //   const registerModal = await this.modalController.create({
  //     component: RegisterPage
  //   });
  //   return await registerModal.present();
  // }

  async login() {
    let params = {...this.loginForm.value };
    console.log('parameters',params);
   
   await this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      
      data => {
        
          console.log('data',data)

          this.user = JSON.parse(data);
          if(this.user[0] == null ){
            return 0;
          }
          else{
            this.alertService.presentToast("Logged In");
            this.navCtrl.navigateRoot('/home');
          }
          this.user.forEach(element => {
            this.id = element.id
            this.storage.set('userId',this.id)
          });
          

         
            
        
      },
      error => {
        console.log('error',error);
      },
      // () => {
      //   this.dismissLogin();
      //  this.navCtrl.navigateRoot('/home'); 
       
      // }
    );
  }
}