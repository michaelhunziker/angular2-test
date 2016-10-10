import {Component, OnInit, Input, EventEmitter} from '@angular/core';
import {Output} from "@angular/core/src/metadata/directives";
import {BookDataService} from "../shared/book-data.service";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  isHidden: boolean = false;
  mouseX: number = null;
  mouseY: number;
  books: any[];
  newBook = {};

  @Input() title: string;
  @Output() bookTitleClicked: EventEmitter<string> = new EventEmitter<string>();

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


  toggleBox() {
    this.isHidden = !this.isHidden;
  }

  mouseMove({clientX, clientY}: MouseEvent) {
    this.mouseX = clientX;
    this.mouseY = clientY;
  }

  onTitleClicked() {
    console.log('clicked');
    this.bookTitleClicked.emit('Hallo!');
  }

  addBook(book) {
    this.bookDataService.addBook(book)
      .subscribe(()=>this.loadBooks());
  }

}
