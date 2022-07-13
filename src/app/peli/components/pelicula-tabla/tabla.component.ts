import { Component, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/pelicula.interface';

@Component({
  selector: 'app-pelicula-tabla',
  templateUrl: './tabla.component.html',
  styles: [
  ]
})
export class TablaComponent {

  @Input() peliculas: Pelicula[] = [];

}
