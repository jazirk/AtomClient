import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppConstants } from '@app/app.constants';
import { HttpService } from '@app/core/services/http.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})

// interface Books {
//   kind: string,
//   totalItems: number,
//   items: [
//     {
//       id: string,
//       volumeInfo: {
//         title: string,
//         publisher: string,
//         publishedDate: Date,
//         authors: String[]
//       }
//     }
//   ]
// }
// interface Books {
//   kind: string,
//   totalItems: number,
//   items: any[]
// }

export class BooksListComponent implements OnInit {

  // class Books {
  //   kind: "books#volumes",
  //   totalItems: 1225,
  //   items: [
  //     {
  //       id: "3cnxyQEACAAJ",
  //       volumeInfo: {
  //         title: "8 Practice Tests for the SAT",
  //         publisher: "Simon and Schuster",
  //         publishedDate: "2019-10-01",
  //         authors: [
  //           "Kaplan Test Prep", "test2"
  //         ]
  //       }
  //     }
  //   ]
  // }
  // books :Books;
  books: any;

  constructor(private httpServ: HttpService) { }

  ngOnInit(): void {
    this.getBooks();
  }
  getBooks() {
    const params = new HttpParams().set('q', 'kaplan%20test%20prep');
    this.httpServ.get(AppConstants.API_ENDPOINTS.GET_BOOKS)
      .subscribe(response => {
        if (response.status == AppConstants.STATUS_CODE.SUCCESS) {
          this.books = response.body;
          console.log("response", response);
        }
      });
  }
}
