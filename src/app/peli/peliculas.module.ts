import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PorPeliculaComponent } from './pages/lista-peliculas/lista-peliculas.component';
import { VerPeliculaComponent } from './pages/ver-pelicula/ver-pelicula.component';
import { TablaComponent } from './components/pelicula-tabla/tabla.component';
import { InputComponent } from './components/input/input.component';




@NgModule({
  declarations: [
    PorPeliculaComponent,
    VerPeliculaComponent,
    TablaComponent,
    InputComponent
  ],
  exports: [
    PorPeliculaComponent,
    VerPeliculaComponent,
    TablaComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ]
})
export class PeliculasModule { }
