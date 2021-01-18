import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WrapperComponent } from './components/wrapper/wrapper.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full',
  },
  {
    path: '',
    component: WrapperComponent,
    children: [
      { path: 'books', loadChildren: () => import('@app/books-list/books-list.module').then(m => m.BooksListModule) },
      { path: 'create-new-book', loadChildren: () => import('@app/create-new-book/create-new-book.module').then(m => m.CreateNewBookModule) }
    ]
  }
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
