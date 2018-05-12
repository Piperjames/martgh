import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreDetailsComponent } from './stores/store-details/store-details.component';
import { StoreListComponent } from './stores/store-list/store-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreDetailsComponent,
    StoreListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
