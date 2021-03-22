import {HttpParams} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {AppConstants} from '@app/app.constants';
import {Books} from '@app/core/models/books-list';
import {HttpService} from '@app/core/services/http.service';

@Component({
    selector: 'app-books-list',
    templateUrl: './books-list.component.html',
    styleUrls: ['./books-list.component.scss']
})

export class BooksListComponent implements OnInit {

    books: Books;
    filteredBooks;
    isLoading: boolean;

    constructor(private httpServ: HttpService) {
    }

    ngOnInit(): void {
        this.getBooks();
    }

    getBooks() {
        this.isLoading = true;
        const params = new HttpParams().set('q', 'kaplan test prep');
        this.httpServ.get(AppConstants.API_ENDPOINTS.GET_BOOKS, params)
            .subscribe(response => {
                if (response.status === AppConstants.STATUS_CODE.SUCCESS) {
                    this.books = response.body;
                    this.filteredBooks = response.body;
                    this.isLoading = false;
                    console.log(this.books);
                }
            });
    }

    searchBooks(searchText): void {
        this.filteredBooks = {
            kind: this.books.kind,
            totalItems: this.books.totalItems,
            items: this.books.items.filter((item) => item.volumeInfo.title.includes(searchText))
        }
    }

}
