import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeezerDatasourceService {
  private MAX_RETRIES = 0;

  constructor(
    private httpClient: HttpClient
  ) { }

  searchArtists( params?: {}, headers?: {}, responseType?: any ): Observable<any>{
    return this.httpClient.get( '/deezer/search/artist/', {params, headers, responseType}).pipe(
      map((response: any) => response?.data || []),
      retry(this.MAX_RETRIES)
    );
  }

  getArtist( id: any ): Observable<any>{
    return this.httpClient.get( `/deezer/artist/${id}/`).pipe(
      map((response: any) => response),
      retry(this.MAX_RETRIES)
    );
  }

  getArtistsTop5Tracks( id: any ): Observable<any>{
    return this.httpClient.get( `/deezer/artist/${id}/top`).pipe(
      map((response: any) => response?.data || []),
      retry(this.MAX_RETRIES)
    );
  }

  getArtistsAlbums( id: any ): Observable<any>{
    return this.httpClient.get( `/deezer/artist/${id}/albums`).pipe(
      map((response: any) => response?.data || []),
      retry(this.MAX_RETRIES)
    );
  }
}
