import {Component, OnInit, Input, EventEmitter} from '@angular/core';
import {BookDataService} from "../shared/book-data.service";
import {Book} from "../shared/book.model";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];
  favorites: Book[] = [];
  newBook = {};

  constructor(private bookDataService: BookDataService) {
  }

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.bookDataService
      .getBooks()
      .subscribe(books=> this.books = books);
  }

  addBook(book: Book) {
    this.bookDataService.addBook(book)
      .subscribe(()=>this.loadBooks());
  }

  onAddToFavorites($event) {
    this.favorites.push($event);
  }

}
