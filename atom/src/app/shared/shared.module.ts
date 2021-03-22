import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookComponent} from '../shared/book/book.component';
import {SearchComponent} from '../shared/search/search.component';


@NgModule({
    declarations: [BookComponent, SearchComponent],
    imports: [
        CommonModule
    ],
    exports: [BookComponent, SearchComponent]
})
export class SharedModule {
}
