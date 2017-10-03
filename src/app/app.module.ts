import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GiphyComponent } from './giphy/giphy.component';
import {FormsModule} from '@angular/forms';
import {GiphyService} from './giphy.service';

import { TrendingComponent } from './trending/trending.component';

@NgModule({
  declarations: [
    AppComponent,
    GiphyComponent,
    TrendingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    //
    HttpModule
  ],
  providers: [GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
