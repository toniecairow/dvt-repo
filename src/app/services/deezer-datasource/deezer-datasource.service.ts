import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Artist } from 'src/app/types/artist/artist';
import { Track } from 'src/app/types/track/track';
import { Album } from 'src/app/types/album/album';

@Injectable({
  providedIn: 'root'
})
export class DeezerDatasourceService {
  private MAX_RETRIES = 0;

  constructor(
    private httpClient: HttpClient
  ) { }

  searchArtists( params?: {}, headers?: {}, responseType?: any ): Observable<Artist[]>{
    return this.httpClient.get( '/deezer/search/artist/', {params, headers, responseType}).pipe(
      map((response: any) => response?.data || []),
      retry(this.MAX_RETRIES)
    );
  }

  getArtist( id: any ): Observable<Artist>{
    return this.httpClient.get( `/deezer/artist/${id}/`).pipe(
      map((response: any) => response),
      retry(this.MAX_RETRIES)
    );
  }

  getArtistsTop5Tracks( id: any ): Observable<Track[]>{
    return this.httpClient.get( `/deezer/artist/${id}/top`).pipe(
      map((response: any) => response?.data || []),
      retry(this.MAX_RETRIES)
    );
  }

  getArtistsAlbums( id: any ): Observable<Album[]>{
    return this.httpClient.get( `/deezer/artist/${id}/albums`).pipe(
      map((response: any) => response?.data || []),
      retry(this.MAX_RETRIES)
    );
  }
}
