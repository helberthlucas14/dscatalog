import { Route, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './pages/Home/home-component/home-component.component';
import { NavbarComponentComponent } from './shared/components/navbar-component/navbar-component.component';

export const routes: Route[] = [
  { path: '', component: HomeComponentComponent },
  { path: '**', redirectTo: '/' }, // Rota para páginas não encontradas
];

export const appRouting = RouterModule.forRoot(routes);
