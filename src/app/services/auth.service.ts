import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
import { User } from '../models/user';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn = false;
  token:any;
  url:string;
  config:any;

  constructor(
    private http: HttpClient,
    private storage: NativeStorage,
    private env: EnvService,
  ) { }

  login(name: String, password: String) {
    var headers = new Headers();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');
   //  let options = new RequestOptions({ headers:headers,withCredentials: true});
     let options = {
      headers: headers
   }
     console.log('print data login', name)
  //  return this.http.get(this.env.API_URL + '?'
  //    + 'username='+ name+ '&'+ 'password='+ password 
  //   ).pipe(
    //  tap(
     
      return this.http.get('https://diamonddmc.com/hudhud/login.php'  + '?'
         + 'username='+ name+ '&'+ 'password='+ password , { headers: new HttpHeaders({
        'Authorization': '{data}',
        'Content-Type': 'application/json',
      }), responseType: 'text'}).pipe (
      tap (token => {
        this.storage.setItem('token', token)
        .then(
          () => {
            console.log('Token Stored');
          },
          error => console.error('Error storing item', error)
        );
        this.token = token;
        this.isLoggedIn = true;
        return token;
      }),
    );
  }
  //name=moh&pass=123
  register(data) {

    this.url = 'https://diamonddmc.com/hudhud/Registiration.php?'
    // + 'name='+ data.email + '&pass='+ data.password +'&Fname=0'  + '&locname=0'  + '&phone='+data.Phone
    this.url = this.url + 
    'name='+ data.email + '&pass='+ data.password +'&Fname=0'  + '&locname=0'  + '&phone='+data.Phone

    this.config = {
      method: 'get',
      url: this.url,
      headers: { }
    };
    
    axios(this.config)
    .then( (response) => {
      this.token = response.data;
      console.log(JSON.stringify(response.data));
        })
    .catch( (error) => {
      console.log(error);
    });

    return this.token;
  
  }
  

    // return this.http.get('https://diamonddmc.com/hudhud/Registiration.php?'
    // + 'name='+ data.email + '&pass='+ data.password +'&Fname=0'  + '&locname=0'  + '&phone='+data.Phone, 
    
    // { headers: new HttpHeaders({
    //   'Authorization': '{data}',
    //   'Content-Type': 'application/json',
    // }), responseType: 'text'}).pipe (
    // tap (token => {
    //   this.storage.setItem('token', token)
    //   .then(
    //     () => {
    //       console.log('Token Stored');
    //     },
    //     error => console.error('Error storing item', error)
    //   );
    //   this.token = token;
    //   this.isLoggedIn = true;
    //   return token;
    // }),
  
    
  

  logout() {
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });

    return this.http.get(this.env.API_URL + 'auth/logout', { headers: headers })
    .pipe(
      tap(data => {
        this.storage.remove("token");
        this.isLoggedIn = false;
        delete this.token;
        return data;
      })
    )
  }

  user() {
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });

    return this.http.get<User>(this.env.API_URL + 'auth/user', { headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    )
  }

  getToken() {
    return this.storage.getItem('token').then(
      data => {
        this.token = data;

        if(this.token != null) {
          this.isLoggedIn=true;
        } else {
          this.isLoggedIn=false;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn=false;
      }
    );
  }
}