import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { GotService } from '../got.service';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css']
})
export class SingleViewComponent implements OnInit {
  public data:any = {};

  constructor(public _httpService: GotService, private _route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this._route.snapshot.paramMap.get('id')
    console.log("ididid",id)
    this._httpService.singleView(id).subscribe(
      data => {
        console.log("singleVieww",data)
        this.data = data;
      })

  }

}
