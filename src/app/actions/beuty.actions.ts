import { Injectable } from '@angular/core';
import { Action} from '@ngrx/store';
import { Beuty} from '../models/beuty.models';


export const ADD_BEUTY       = '[Beuty] Add'
export const REMOVE_BEUTY    = '[Beuty] Remove'


export class AddBeuty implements Action {
  readonly type = ADD_BEUTY;

  constructor(public payload: Beuty) {}
}

export  class RemoveBeuty implements Action {
  readonly  type = REMOVE_BEUTY
  constructor(public payload: number) {}
}

export type Actions = AddBeuty | RemoveBeuty;
