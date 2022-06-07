import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DeezerDatasourceService } from 'src/app/services/deezer-datasource/deezer-datasource.service';
import { Album } from 'src/app/types/album/album';
import { Artist } from 'src/app/types/artist/artist';
import { Track } from 'src/app/types/track/track';

@Component({
  selector: 'app-artists-detail-view',
  templateUrl: './artists-detail-view.component.html',
  styleUrls: ['./artists-detail-view.component.scss']
})
export class ArtistsDetailViewComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  artist: Artist | undefined;
  top5Tracks: Track[] = [];
  albums: Album[] = [];

  constructor(
    private deezerDataSourceService: DeezerDatasourceService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.subscription.add(
      this.deezerDataSourceService.getArtist(this.route.snapshot.params.id).subscribe(data => {
        this.artist = data;
      }),
    );
    this.subscription.add(
      this.deezerDataSourceService.getArtistsTop5Tracks(this.route.snapshot.params.id).subscribe(data => {
        this.top5Tracks = data;
      }),
    );
    this.subscription.add(
      this.deezerDataSourceService.getArtistsAlbums(this.route.snapshot.params.id).subscribe(data => {
        this.albums = data;
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
