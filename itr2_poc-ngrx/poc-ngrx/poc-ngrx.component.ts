import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {MULTIPLYBYTWO, DIVIDEBYTWO} from './MathReducer' ;
import {AppState} from '../AppState';
import {Observable} from 'rxjs/Observable';

//step 3. define the AppState
// interface AppState  moved to AppState.ts and export interface AppState

@Component({
  selector: 'app-poc-ngrx',
  templateUrl: './poc-ngrx.component.html',
  styleUrls: ['./poc-ngrx.component.css']
})
export class PocNgrxComponent implements OnInit {

  yr: Observable<number>; //step4.2. create an observable and
  //step 4.1: create instance of Store<AppState> & implement dispatch methods
  constructor(private store: Store<AppState> ) {
    this.yr = this.store.select('year');
  }

  ngOnInit() {
  }

  multiplybytwo(){
    this.store.dispatch({ type: 'MULTIPLYBYTWO'})
  }

  dividebytwo(){
    this.store.dispatch({ type: 'DIVIDEBYTWO'})
  }

}
