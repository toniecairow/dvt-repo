import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistsListViewComponent } from './pages/artists-list-view/artists-list-view.component';
import { ArtistsDetailViewComponent } from './pages/artists-detail-view/artists-detail-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistsListViewComponent,
    ArtistsDetailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
