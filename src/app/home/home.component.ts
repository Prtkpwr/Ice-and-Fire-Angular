import { Component, OnInit } from '@angular/core';
import { GotService } from '../got.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/mergeMap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [GotService]
})
export class HomeComponent implements OnInit {
  all: any = [];
  characters: any = [];
  books: any = [];
  houses: any = [];

  p: number = 1;

  // for sorting
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }
  
  constructor(private gotService: GotService, private _route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
 // used mergeMAp for doing async operation
    this.gotService.getChar()
      .mergeMap(
        data => {
          this.characters = data;
          console.log("Characters")

          return this.gotService.getBooks()
        })
      .mergeMap(
        data => {
          this.books = data;
          console.log("Books")

          return this.gotService.getHouses()
        })
      .subscribe(
        data => {
          this.houses = data;
          console.log("Houses")
          //ES6 array spread used
          this.all = [...this.characters, ...this.books, ...this.houses]
          console.log("all", this.all)
        },
        error => {
          console.log("some error occured");
          console.log(error.errorMessage)
        }
      );
  }

}
