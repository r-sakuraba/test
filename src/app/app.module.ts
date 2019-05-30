import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeckSampleComponent } from './deck-sample/deck-sample.component';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  { path: 'deck-sample', component: DeckSampleComponent },
];

@NgModule({
  declarations: [AppComponent, DeckSampleComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
