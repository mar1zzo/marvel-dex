import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//observable
import { map, Observable } from 'rxjs';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {
  
  //marvel
  private timeStamp: string = '1660441890';
  private publicKey: string = '3a851292c80baddfd780f1a683864433';
  private md5: string = '4c502203558b87e33bacde5a2a9e40d5';
  private urlAllCharacters: string = `https://gateway.marvel.com:443/v1/public/characters?ts=${this.timeStamp}&apikey=${this.publicKey}&hash=${this.md5}&limit=100`;  

  constructor(
    private http: HttpClient
  ) { }

  get apiListAllMarvelCharacters1(): Observable<any>{
    return this.http.get<any>(this.urlAllCharacters).pipe(
      tap(response => {
        response.data.results
      })
    )
  }

  get apiListAllMarvelCharacters(): Observable<any>{
    return this.http.get<any>(this.urlAllCharacters).pipe(
      tap(response => response),
      tap(response => {
        response.data.results.map((resMarvelCharacters: any) => {
          this.apiGetMarvelCharacter(resMarvelCharacters.resourceURI).subscribe(
            response => resMarvelCharacters.detail = response
          );
        })
      })
    )
  }

  public apiGetMarvelCharacter( url: string ):Observable<any>{
    return this.http.get<any>( url + `?apikey=${this.publicKey}` ).pipe(
      map(
        response => response
      )
    ) 
  }

  // get apiListAllMarvelCharacters(): Observable<any>{
  //   return this.http.get<any>(this.urlAllCharacters).pipe(
  //     tap(response => response),
  //     tap(response => {
  //       response.data.results.map((resMarvelCharacters: any) => {

  //         this.http.get<any>(resMarvelCharacters.resourceURI).pipe(
  //           map(
  //             response => response
  //           )
  //           ).subscribe(
  //             response => resMarvelCharacters.detail = response
  //           )
            
  //       })
  //     })
  //   )
  // }
}
