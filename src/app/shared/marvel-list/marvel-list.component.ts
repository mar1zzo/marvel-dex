import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from 'src/app/services/marvel-api.service';

@Component({
  selector: 'marvel-list',
  templateUrl: './marvel-list.component.html',
  styleUrls: ['./marvel-list.component.scss']
})
export class MarvelListComponent implements OnInit {

  private setAllCharacters: any;
  public getAllCharacters: any;

  constructor(
    private marvelApiService: MarvelApiService
  ) { }

  ngOnInit(): void {
    this.marvelApiService.apiListAllMarvelCharacters.subscribe(
      response => {
        this.setAllCharacters = response.data.results;
        this.getAllCharacters = this.setAllCharacters;
      });
  }

  public getSearch(value: string){
    const filter = this.setAllCharacters.filter( (res: any) => {
      return !res.name.toLowerCase().indexOf(value.toLowerCase());
    });
    this.getAllCharacters = filter;
  }
}
