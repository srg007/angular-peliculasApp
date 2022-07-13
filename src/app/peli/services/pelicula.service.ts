import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pelicula } from '../interfaces/pelicula.interface';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  //private appiUrl : string = 'https://restcountries.eu/rest/v2';
  private appiUrl : string = 'http://www.omdbapi.com/?apikey=f64cb101&';
  get httpParams() {
    return new HttpParams().set( "fields", "name;capital;alpha2Code;flag;population" );
  }

  constructor(private http: HttpClient) { }

  buscarPelicula( termino: string ): Observable<Pelicula> {
    console.log(termino)
    const url = `${ this.appiUrl }t=${ termino }`;

    return this.http.get<Pelicula>(url);
  }

  buscarId( id: string):Observable<Pelicula> {
    const url = `${this.appiUrl}i=${ id }`;

    return this.http.get<Pelicula>(url);
  }

}
