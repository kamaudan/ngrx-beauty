import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Beuty } from '../models/beuty.models';
import * as Action from './../actions/beuty.actions';
import { Observable} from 'rxjs';
import {Actions} from './../actions/beuty.actions';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  addBeuty(name, url) {
    this.store.dispatch(new Action.AddBeuty({name, url}));


  }

  ngOnInit() {
  }

}
