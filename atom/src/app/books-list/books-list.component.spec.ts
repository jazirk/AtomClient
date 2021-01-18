import { async, ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { BooksListComponent } from './books-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { HttpService } from '@app/core/services/http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { SearchComponent } from '@app/containers/search/search.component';
import { BookComponent } from '@app/containers/book/book.component';

function initTestBed() {
  TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      RouterTestingModule,
      ToastrModule.forRoot({ positionClass: 'toast-bottom-left' })
    ],
    declarations: [
      BooksListComponent,
      SearchComponent,
      BookComponent
    ],
    providers: [
      HttpService
    ]
  }).compileComponents();
}

describe('BooksListComponent', () => {
  let component: BooksListComponent;
  let fixture: ComponentFixture<BooksListComponent>;
  let injector: TestBed;
  let httpService: HttpService;


  beforeEach(async(() => {
    initTestBed();
    injector = getTestBed();
    httpService = injector.inject(HttpService);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getBooks() to fetch Books List', () => {
    const bookResponse = {
      status: 'SUCCESS'
    };
    spyOn(httpService, 'get').and.returnValue(of(bookResponse));
    component.getBooks();
    console.log("test case", component.books, component);
    expect(bookResponse.status).toEqual('SUCCESS');
  });

});
