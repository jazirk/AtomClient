import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateNewBookRoutingModule } from './create-new-book-routing.module';
import { CreateNewBookComponent } from './create-new-book.component';


@NgModule({
  declarations: [CreateNewBookComponent],
  imports: [
    CommonModule,
    CreateNewBookRoutingModule
  ]
})
export class CreateNewBookModule { }
