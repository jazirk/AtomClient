import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  isCollapsed: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  public toggleCollapsed(event) {
    this.isCollapsed = event;
  }

}
