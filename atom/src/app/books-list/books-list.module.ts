import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BooksListRoutingModule} from './books-list-routing.module';
import {BooksListComponent} from './books-list.component';
import {SharedModule} from "@app/shared/shared.module";


@NgModule({
    declarations: [
        BooksListComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        BooksListRoutingModule
    ],
    exports: []
})
export class BooksListModule {
}
