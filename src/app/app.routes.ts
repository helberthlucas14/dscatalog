import { Route, RouterModule } from '@angular/router';
import { HomeComponentComponent } from './pages/Home/home-component/home-component.component';
import { AuthComponentComponent } from './pages/Auth/auth-component.component';
import { LoginComponentComponent } from './pages/Auth/componets/login-component/login-component.component';
import { CatalogComponentComponent } from './pages/Catalog/components/catalog-component.component';
import { ProductDetailsComponentComponent } from './pages/Catalog/components/product-details-component/product-details-component.component';
import { AuthGuard } from './shared/models/AuthGuard';

export const routes: Route[] = [
  {
    path: 'auth',
    component: AuthComponentComponent,
    children: [
      { path: 'login', component: LoginComponentComponent }, // Definindo a rota de login
      //   { path: 'register', component: RegisterComponent }, // Rota de registro
      //   { path: 'recover', component: RecoverComponent }, // Rota de recuperação
    ],
  },
  { path: '', component: HomeComponentComponent },
  {
    path: 'products',
    canActivate: [AuthGuard],
    component: CatalogComponentComponent,
  },
  { path: 'products/:productId', component: ProductDetailsComponentComponent },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./pages/Admin/admin-component.component').then(
        (m) => m.AdminComponentComponent
      ),
  },

  { path: '**', redirectTo: '/' }, // Rota para páginas não encontradas
];

export const appRouting = RouterModule.forRoot(routes);
