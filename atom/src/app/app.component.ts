import { Component } from '@angular/core';
import {DatastoreService} from "@app/core/services/datastore.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Atom Client';

  /*NgRx store/effects ways
  // constructor(private dataService: DatastoreService) {
  //   this.dataService.load();
  // }
  */
}
