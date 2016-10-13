import {Component, OnInit, Input} from '@angular/core';
import {Book} from "../shared/book.model";

@Component({
  selector: 'ba-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  @Input()
  favorites: Book[];

  constructor() { }

  ngOnInit() {
  }

}
