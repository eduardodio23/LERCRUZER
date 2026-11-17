import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio',
  },
  {
    path: 'inicio',
    loadComponent: () =>
      import('./pages/inicio/inicio.component').then((page) => page.InicioComponent),
    title: 'Início | Lercruzer',
  },
  {
    path: 'sobre',
    loadComponent: () =>
      import('./pages/sobre/sobre.component').then((page) => page.SobreComponent),
    title: 'Nossa história | Lercruzer',
  },
  {
    path: 'cardapio',
    loadComponent: () =>
      import('./pages/cardapio/cardapio.component').then((page) => page.CardapioComponent),
    title: 'Cardápio | Lercruzer',
  },
  {
    path: 'faleconosco',
    loadComponent: () =>
      import('./pages/faleconosco/faleconosco.component').then((page) => page.FaleconoscoComponent),
    title: 'Fale conosco | Lercruzer',
  },
  {
    path: 'contato',
    loadComponent: () =>
      import('./pages/contato/contato.component').then((page) => page.ContatoComponent),
    title: 'Contato | Lercruzer',
  },
  {
    path: 'reserva',
    loadComponent: () =>
      import('./pages/reserva/reserva.component').then((page) => page.ReservaComponent),
    title: 'Reservas | Lercruzer',
  },
  {
    path: 'eventos',
    loadComponent: () =>
      import('./pages/eventos/eventos.component').then((page) => page.EventosComponent),
    title: 'Eventos | Lercruzer',
  },
  {
    path: '**',
    redirectTo: 'inicio',
  },
];
