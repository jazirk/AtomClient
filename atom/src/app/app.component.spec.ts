import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LoaderComponent } from './loader/loader.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';

function initTestBed() {
  TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      RouterTestingModule,
      ToastrModule.forRoot({ positionClass: 'toast-bottom-left' })
    ],
    declarations: [
      AppComponent,
      LoaderComponent
    ]
  }).compileComponents();
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    initTestBed();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'atom-books'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('atom-books');
  });

});
