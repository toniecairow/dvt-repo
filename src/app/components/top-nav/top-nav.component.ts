import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';
import { DeezerDatasourceService } from 'src/app/services/deezer-datasource/deezer-datasource.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  searchControl = new FormControl('');
  @Output() onArtistsRetrieved = new EventEmitter<any>();
  @Input() showSearch = false;

  constructor(
    private deezerDataSourceService: DeezerDatasourceService
  ) { }

  ngOnInit(): void {
    this.subscription.add(
      this.searchControl.valueChanges.pipe(
        startWith(''),
        debounceTime(400),
        distinctUntilChanged()
      ).subscribe(val => {
        let  artists = new Observable();
        if(val || (val?.trim() !== '')){
          const params = new HttpParams().set('q', val);
          artists = this.deezerDataSourceService.searchArtists(params);
          this.onArtistsRetrieved.emit(artists);
        }
        this.onArtistsRetrieved.emit(artists);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
