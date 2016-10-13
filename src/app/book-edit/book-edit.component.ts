import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'ba-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  bookId: string;

  constructor(route: ActivatedRoute) {
    route
      .params
      .subscribe(params=> {
          this.bookId = params['bookId']
        }
      )
  }

  ngOnInit() {
  }

}
