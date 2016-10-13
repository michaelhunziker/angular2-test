import {Routes, RouterModule} from '@angular/router';
import {BookListComponent} from "./book-list/book-list.component";
import {BookEditComponent} from "./book-edit/book-edit.component";

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: BookListComponent
  },
  {
    path: 'book-edit/:bookId',
    component: BookEditComponent,

  },
  {
    path: '**',
    redirectTo: 'list'
  }
];

export const AppRouterModules = RouterModule.forRoot(APP_ROUTES);
