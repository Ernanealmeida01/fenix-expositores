import { Routes } from '@angular/router';
import {
  Contato,
  Home,
  Produtos,
  Sobre
} from './pages';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'produtos', component: Produtos },
  { path: 'sobre', component: Sobre },
  { path: 'contato', component: Contato },
  { path: '**', redirectTo: '' }
];
