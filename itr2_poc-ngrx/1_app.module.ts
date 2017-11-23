import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {StoreModule, ActionReducerMap} from '@ngrx/store';
import {AppState} from './AppState' ;
import {MathReducer} from './poc-ngrx/MathReducer';

import { AppComponent } from './app.component';
import { PocNgrxComponent } from './poc-ngrx/poc-ngrx.component';

export const reducers: ActionReducerMap<AppState> = { year : MathReducer  } //new style!!!


@NgModule({
  declarations: [
    AppComponent,
    PocNgrxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // , StoreModule.provideStore({ year : MathReducer }) //old style
    // StoreModule.forRoot({ year : MathReducer }) 
    StoreModule.forRoot(reducers) //new style !!!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
