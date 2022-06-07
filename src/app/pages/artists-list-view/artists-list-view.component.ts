import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from 'src/app/types/artist/artist';

@Component({
  selector: 'app-artists-list-view',
  templateUrl: './artists-list-view.component.html',
  styleUrls: ['./artists-list-view.component.scss']
})
export class ArtistsListViewComponent implements OnInit {
  filteredArtists: Observable<Artist[]> = new Observable();

  constructor() { }

  ngOnInit(): void {
  }

  onArtistsRetrieved($event: Observable<Artist[]>){
    this.filteredArtists = $event;
  }

}
