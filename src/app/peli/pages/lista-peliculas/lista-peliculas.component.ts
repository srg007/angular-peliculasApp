import { Component} from '@angular/core';

import { PeliculaService } from '../../services/pelicula.service';
import { Pelicula } from '../../interfaces/pelicula.interface';

@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class PorPeliculaComponent {
  hayError: Boolean = false;
  termino: string = "";
  pelicula: Pelicula[] = [];

  constructor(private peliculasService: PeliculaService) { }

  buscar( termino: string ) {
    this.hayError = false;
    this.termino = termino;
    this.peliculasService.buscarPelicula( termino )
      .subscribe( pelicula => {
        if (pelicula.Response != "False") {
          this.pelicula = []
          this.pelicula.push(pelicula)
          console.log(this.pelicula);
        } else {
          this.hayError = true;
          this.pelicula = [];
        }

      });
  }

}
