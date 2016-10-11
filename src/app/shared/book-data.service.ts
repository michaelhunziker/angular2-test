import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Book} from "../book";

@Injectable()
export class BookDataService {

  constructor(private http: Http) {
  }

  url: string = 'http://localhost:4730/books';

  addBook(book) {
    return this.http
      .post(this.url, book);
  }

  getBooks():Observable<Book[]>{

    return this.http
      .get(this.url)
      .map((res: Response) => res.json() || {})
      .catch(function (error: any) {
        console.log('ERROR', error);
        return Observable.throw(error.message)
      });

    // return [
    //   {
    //     title: "Buch 1",
    //     isbn: "123",
    //     author: "Michi"
    //   },
    //   {
    //     title: "Buch 2",
    //     isbn: "567",
    //     author: "Hans"
    //   }
    // ]
  }

}
