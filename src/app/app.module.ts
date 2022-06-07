import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/material/material.module';

import { AppComponent } from './app.component';
import { ArtistsListViewComponent } from './pages/artists-list-view/artists-list-view.component';
import { ArtistsDetailViewComponent } from './pages/artists-detail-view/artists-detail-view.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { TrackComponent } from './components/track/track.component';


@NgModule({
  declarations: [
    AppComponent,
    ArtistsListViewComponent,
    ArtistsDetailViewComponent,
    TopNavComponent,
    TrackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
