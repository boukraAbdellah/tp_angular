import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class S1Service {
  direBonjour() {
    console.log('Bonjour');
  }

  constructor() { 
    
  }
}
