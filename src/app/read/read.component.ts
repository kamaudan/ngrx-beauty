import { Component, OnInit } from '@angular/core';
import {Observable, observable} from 'rxjs';
import { Store } from '@ngrx/store';
import { Beuty } from '../models/beuty.models';
import { AppState} from '../app.state';
import * as Actions from '../actions/beuty.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  beuty: Observable<Beuty[]>;

  constructor(private store: Store<AppState>) {
    this.beuty = store.select('beuty');
  }

  delBeuty(index) {
    this.store.dispatch(new  Actions.RemoveBeuty(index));
  }
  ngOnInit() {
  }

}
