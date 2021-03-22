import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() searchEmitter =  new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  searchBooks(event: Event) : void {
    this.searchEmitter.emit((event.target as HTMLInputElement).value);
  }

}
