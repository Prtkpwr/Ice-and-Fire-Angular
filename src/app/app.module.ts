import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

//router module used for setting up the application level route
import {RouterModule,Routes} from '@angular/router'
import { HttpClientModule } from "@angular/common/http";

import {GotService} from './got.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      // {path:'create',component:PostBlogComponent},
      // {path:'edit/:blogId',component:BlogEditComponent},
      // {path:'**',component:NotFoundComponent}
      

    ])
  ],
  providers: [GotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
