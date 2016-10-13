import {Component, Input, EventEmitter} from '@angular/core';
import {Book} from "../../shared/book.model";
import {Output} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'book-list-entry',
  templateUrl: './book-list-entry.component.html',
  styleUrls: ['./book-list-entry.component.css']
})
export class BookListEntryComponent {

  @Input()
  book: Book;

  @Output()
  addToFavorites: EventEmitter<Book> = new EventEmitter<Book>();

  constructor() { }

  addBookToFavorites() {
    this.addToFavorites.emit(this.book);
  }


}
