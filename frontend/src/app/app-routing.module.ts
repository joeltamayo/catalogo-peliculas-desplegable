import { NgModule } from '@angular/core'; // Importa NgModule para definir el módulo
import { RouterModule, Routes } from '@angular/router'; // Importa RouterModule y Routes para configurar las rutas
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component'; // Importa el componente de la lista de películas
import { MovieComponent } from './pages/movie/movie.component'; // Importa el componente para mostrar los detalles de una película

// Definición de las rutas
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige a la página de inicio
  { path: 'home', component: HomeComponent },           // Página principal (index)
  { path: 'catalogo', component: CatalogoComponent },  // Catálogo de películas
  { path: 'movies', component: MoviesComponent },      // Tabla con las películas
  { path: 'movie/:id', component: MovieComponent },    // Página de detalles de una película
  { path: '**', redirectTo: 'home' }                   // Redirige a /home si no existe la ruta
];

// Configuración del módulo de enrutamiento
@NgModule({
  imports: [RouterModule.forRoot(routes)], // Importa RouterModule y configura las rutas con RouterModule.forRoot
  exports: [RouterModule] // Exporta RouterModule para que esté disponible en toda la aplicación
})
export class AppRoutingModule { } // Exporta AppRoutingModule para su uso en el módulo principal