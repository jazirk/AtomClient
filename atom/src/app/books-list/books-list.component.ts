import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppConstants } from '@app/app.constants';
import { HttpService } from '@app/core/services/http.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  books = {
    kind: "books#volumes",
    totalItems: 1225,
    items: [
      {
        id: "3cnxyQEACAAJ",
        volumeInfo: {
          title: "8 Practice Tests for the SAT",
          publisher: "Simon and Schuster",
          publishedDate: "2019-10-01",
          authors: [
            "Kaplan Test Prep", "test2"
          ]
        }
      },
      {
        id: "3cnxyQEACAAJ",
        volumeInfo: {
          title: "8 Practice Tests for the SAT",
          publisher: "Simon and Schuster",
          publishedDate: "2019-10-01",
          authors: [
            "Kaplan Test Prep"
          ]
        }
      },
      {
        id: "3cnxyQEACAAJ",
        volumeInfo: {
          title: "8 Practice Tests for the SAT",
          publisher: "Simon and Schuster",
          publishedDate: "2019-10-01",
          authors: [
            "Kaplan Test Prep"
          ]
        }
      },
      {
        id: "3cnxyQEACAAJ",
        volumeInfo: {
          title: "8 Practice Tests for the SAT",
          publisher: "Simon and Schuster",
          publishedDate: "2019-10-01",
          authors: [
            "Kaplan Test Prep"
          ]
        }
      },
      {
        id: "3cnxyQEACAAJ",
        volumeInfo: {
          title: "8 Practice Tests for the SAT",
          publisher: "Simon and Schuster",
          publishedDate: "2019-10-01",
          authors: [
            "Kaplan Test Prep"
          ]
        }
      }
    ]
  }

  constructor(private httpServ: HttpService) { }

  ngOnInit(): void {
    // this.getBooks();
    this.getPosts();
  }
  getBooks(){
    //https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep
    const params = new HttpParams().set('q', 'kaplan%20test%20prep');
    this.httpServ.get(AppConstants.API_ENDPOINTS.GET_BOOKS)
      .subscribe(response => {
        // if (response.status == AppConstants.HTTP_MESSAGE_TYPE.SUCCESS && response.httpStatus == AppConstants.STATUS_CODE.SUCCESS) {
        //   this.books = response;
        // }
        console.log("response", response);
      });
  }

  getPosts(){
    this.httpServ.get('/users')
      .subscribe(response => {
        console.log("response", response);

        // if (response.status == AppConstants.HTTP_MESSAGE_TYPE.SUCCESS && response.httpStatus == AppConstants.STATUS_CODE.SUCCESS) {
        //   console.log("response", response);
        //   // this.books = response;
        // }
      });
  }
}
