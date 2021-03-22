import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import {AppComponent} from "@app/app.component";

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have title 'MENU`, () => {
    const element = fixture.nativeElement;
    expect(element.querySelectorAll('.nav-item')[0].textContent).toEqual('Menu');
  });

  it(`should have title 'CONTENT MANAGEMENT`, () => {
    const element = fixture.nativeElement;
    expect(element.querySelectorAll('.nav-item')[1].textContent).toEqual('Content Management');
  });

  it(`should have title 'COURSES`, () => {
    const element = fixture.nativeElement;
    expect(element.querySelectorAll('.nav-item')[2].textContent).toEqual('Courses');
  });
});
