import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artista: any;
  top_tracks: any;
  constructor(private aRoute: ActivatedRoute, public _spotify: SpotifyService) { }

  ngOnInit() {
    this.aRoute.params.map(params => params['id']).subscribe(id => {
      console.log(id);
      this._spotify.getArtist(id).subscribe(r => {
        this.artista = r;
        console.log(r);
      });
      this._spotify.getTop(id).subscribe(r => {
        this.top_tracks = r;
        console.log(r);

      });
    });
  }

}
