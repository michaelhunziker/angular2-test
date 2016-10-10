import {Component, OnInit, Input, EventEmitter} from '@angular/core';
import {Output} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  isHidden:boolean = false;
  mouseX:number = null;
  mouseY:number;

  @Input() title: string;
  @Output() bookTitleClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  toggleBox() {
    this.isHidden = !this.isHidden;
  }

  mouseMove({clientX,clientY}: MouseEvent) {
    this.mouseX = clientX;
    this.mouseY = clientY;
  }

  ngOnInit() {
  }

  onTitleClicked() {
    console.log('clicked');
    this.bookTitleClicked.emit('Hallo!');
  }

}
