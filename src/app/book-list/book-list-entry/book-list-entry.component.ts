import {Component, OnInit, Input, EventEmitter} from '@angular/core';
import {Book} from "../../book";
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
  bookTitleClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  onBookTitleClicked($event) {
    this.bookTitleClick.emit($event);
  }


}
