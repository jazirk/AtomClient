import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksListRoutingModule } from './books-list-routing.module';
import { BooksListComponent } from './books-list.component';
import { SearchComponent } from '@app/search/search.component';


@NgModule({
  declarations: [
    BooksListComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    BooksListRoutingModule
  ],
  exports : [  ]
})
export class BooksListModule { }
