import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL = 'https://diamonddmc.com/hudhud/test.php'; //test.php
  
  constructor() { }
}