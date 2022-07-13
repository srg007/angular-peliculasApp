import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PeliculaService } from '../../services/pelicula.service';
import { switchMap, tap } from 'rxjs/operators';
import { Pelicula } from '../../interfaces/pelicula.interface';

@Component({
  selector: 'app-ver-pelicula',
  templateUrl: './ver-pelicula.component.html',
  styles: [
  ]
})
export class VerPeliculaComponent implements OnInit {

  peli!: Pelicula;

  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculasService: PeliculaService

  ) { }

  ngOnInit(): void {
    // Para saber si hay cambios(buscar por url por ejemplo)

    this.activatedRoute.params
      .pipe(
        //obtiene un observable y retorna un observable
        switchMap( ({ id }) => this.peliculasService.buscarId(id) ),
        //una forma de imprimar lo que pasa por aqui
        tap(respuesta => console.log(respuesta))
      )
      .subscribe( peli => { this.peli = peli; });
  }

}
