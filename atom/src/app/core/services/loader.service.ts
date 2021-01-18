import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  showLoader = false;

  constructor() { }

  show() {
    console.log("loading...");
    this.showLoader = true;
  }

  hide() {
    this.showLoader = false;
  }
}
