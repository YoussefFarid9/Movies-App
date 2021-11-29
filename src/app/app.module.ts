import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./AppRoutingModule";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
