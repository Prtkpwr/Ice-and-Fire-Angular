import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import { NgxPaginationModule } from 'ngx-pagination';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

//router module used for setting up the application level route
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from "@angular/common/http";

import { GotService } from './got.service';
import { SingleViewComponent } from './single-view/single-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingleViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      // {path:'create',component:PostBlogComponent},
      { path: 'singleView/:id', component: SingleViewComponent },
      // {path:'**',component:NotFoundComponent}


    ])
  ],
  providers: [GotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
