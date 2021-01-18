import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksListRoutingModule } from './books-list-routing.module';
import { BooksListComponent } from './books-list.component';
import { SearchComponent } from '@app/containers/search/search.component';
import { BookComponent } from '@app/containers/book/book.component';


@NgModule({
  declarations: [
    BooksListComponent,
    SearchComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    BooksListRoutingModule
  ],
  exports : [ ]
})
export class BooksListModule { }
