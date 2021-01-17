import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * This service class helps to save to store data temporary and can be accessed across application.
 * Data in this class gets reset on refresh of application (Refresh of browser).
 */

@Injectable({
  providedIn: 'root'
})

export class DataService {
  // private sessionToken = new BehaviorSubject<string>(''); //have to replace token from auth service file
  // public $sessionToken = this.sessionToken.asObservable();
  private language = new BehaviorSubject<string>('');
  public $language = this.language.asObservable();

  constructor() { }

  // set userToken(token: string) {
  //   this.sessionToken.next(token);
  // }

  set choosenLanguage(lang: string){
    this.language.next(lang);
    sessionStorage.setItem('language', lang);
  }

}
