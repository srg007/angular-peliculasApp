import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VerPeliculaComponent } from './peli/pages/ver-pelicula/ver-pelicula.component';
import { PorPeliculaComponent } from './peli/pages/lista-peliculas/lista-peliculas.component';

const routes: Routes = [
  {
    // RUTA PRINCIPAL
      path: '',
      component: PorPeliculaComponent,
      pathMatch: 'full'
  },
  {
      path: 'pelicula/:id',
      component: VerPeliculaComponent
  },
  {
      //Cualquier otra ruta!
      path: '**',
      redirectTo: ''
  }
];

//Decorador
@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})


export class AppRoutingModule {


}
