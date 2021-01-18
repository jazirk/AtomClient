import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { BooksListRoutingModule } from './books-list-routing.module';
import { BooksListComponent } from './books-list.component';
import { SearchComponent } from '@app/containers/search/search.component';
import { BookComponent } from '@app/containers/book/book.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from '@app/layout/components/sidebar/sidebar.component';
import { CreateNewBookComponent } from '@app/create-new-book/create-new-book.component';
import { HeaderComponent } from '@app/layout/components/header/header.component';
import { ToastMessageService } from '@app/core/services/toast-message.service';
import { ToastrModule } from 'ngx-toastr';
import { HttpService } from '@app/core/services/http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

function initTestBed() {
  TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      RouterTestingModule,
      ToastrModule.forRoot({ positionClass: 'toast-bottom-left' })
    ],
    declarations: [
      BooksListComponent
    ],
    providers: [
      HttpService
    ]
  }).compileComponents();
}

describe('BooksListComponent', () => {
  let component: BooksListComponent;
  let fixture: ComponentFixture<BooksListComponent>;

  beforeEach(async(() => {
    initTestBed();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
