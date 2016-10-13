import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  bookId: string;

  constructor(route: ActivatedRoute,
              private authService: AuthService) {
    route
      .params
      .subscribe(params=> {
          this.bookId = params['bookId']
        }
      )
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
  }

}
