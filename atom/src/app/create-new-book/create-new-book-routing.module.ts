import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateNewBookComponent } from './create-new-book.component';


const routes: Routes = [
  { path: '', component: CreateNewBookComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateNewBookRoutingModule { }
