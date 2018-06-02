import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class GotService {

  private charUrl = 'https://www.anapioficeandfire.com/api/characters';
  private bookUrl = 'https://www.anapioficeandfire.com/api/books';
  private houseUrl = 'https://www.anapioficeandfire.com/api/houses';

  constructor(private _http: HttpClient) {

    console.log("GotService is called")
   }

  private handleError(err: HttpErrorResponse) {
    console.log("Handle error Http calls")
    console.log(err.message);
    return Observable.throw(err.message)
  }

  getChar(): any {
    let myResponse = this._http.get(this.charUrl)
    return myResponse;
  }
  getBooks(): any {
    let myResponse = this._http.get(this.bookUrl)
    return myResponse;
  }
  getHouses(): any {
    let myResponse = this._http.get(this.houseUrl)
    return myResponse;
  }

}
