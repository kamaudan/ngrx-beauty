import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { reducer} from './reducers/beuty.reducer';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      beuty: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
