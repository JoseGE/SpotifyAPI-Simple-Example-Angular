import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SpotifyService {
  artistas: any = [];
  private _urlApi = 'https://api.spotify.com/v1';
  private _token = 'BQCVFfozhhj18jSWWwpKEmp7NJWklEc7a_v6XvIXpmIM5cvk-SiZzgnIjdAbF5twv0-Donz2gmnNUz9Zqds';
  constructor(private http: HttpClient) { }
  private getHeaders(): HttpHeaders {

    const headers = new HttpHeaders({
      'authorization': `Bearer ${this._token}`
    });
    return headers;
  }
  getArtist(id: string) {
    const url = `${this._urlApi}/artists/${id}`;
    const headers = this.getHeaders();
    return this.http.get(url, { headers });
  }
  getArtists(termino: string) {
    const url = `${this._urlApi}/search?query=${termino}&type=artist&limit=20`;
    const headers = this.getHeaders();
    return this.http.get(url, { headers }).map((resp: any) => {
      this.artistas = resp.artists.items;
      return this.artistas;
    });
  }
  getTop(id: string) {
    const url = `${this._urlApi}/artists/${id}/top-tracks?country=US`;
    const headers = this.getHeaders();
    return this.http.get(url, { headers }).map((tracks: any) => tracks.tracks);
  }
}
