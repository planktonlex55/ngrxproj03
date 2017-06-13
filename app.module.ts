import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {StoreModule} from '@ngrx/store';
import {MathReducer} from './MathReducer';
import { Child1Component } from './child1/child1.component' ;
import {AppState} from './AppState' ;

@NgModule({
  declarations: [
    AppComponent,
    Child1Component
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore({ year : MathReducer }) //step2: register the reducer
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
