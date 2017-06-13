import { Component, OnInit } from '@angular/core';

import {Store} from '@ngrx/store';
import {MULTIPLYBYTWO, DIVIDEBYTWO} from '../MathReducer' ;
import {AppState} from '../AppState';
import {Observable} from 'rxjs/Observable';

//step 3. define the AppState
// interface AppState  moved to AppState.ts and export interface AppState

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})

export class Child1Component implements OnInit {
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
