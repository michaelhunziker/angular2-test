import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDataService } from "./shared/book-data.service";
import { BookEditComponent } from './book-edit/book-edit.component';
import { AppRouterModules } from "./app.routes";
import {AuthService} from "./shared/auth.service";

@NgModule({
  declarations: [
    AppComponent,

    // TODO: The following components should be extracted to modules
    BookListComponent,
    BookEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterModules
  ],
  providers: [BookDataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
