import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistsListViewComponent } from './pages/artists-list-view/artists-list-view.component';
import { ArtistsDetailViewComponent } from './pages/artists-detail-view/artists-detail-view.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { TrackComponent } from './components/track/track.component';
import { AlbumComponent } from './components/album/album.component';
import { ArtistComponent } from './components/artist/artist.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistsListViewComponent,
    ArtistsDetailViewComponent,
    TopNavComponent,
    TrackComponent,
    AlbumComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
