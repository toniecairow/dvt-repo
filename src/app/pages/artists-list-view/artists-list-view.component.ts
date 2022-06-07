import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-artists-list-view',
  templateUrl: './artists-list-view.component.html',
  styleUrls: ['./artists-list-view.component.scss']
})
export class ArtistsListViewComponent implements OnInit {
  filteredArtists: Observable<any[]> = new Observable();

  constructor() { }

  ngOnInit(): void {
  }

  onArtistsRetrieved($event: Observable<any[]>){
    this.filteredArtists = $event;
  }

}
