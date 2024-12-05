import { Route } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { VideosComponent } from './components/videos/videos.component';
import { FotosComponent } from './components/fotos/fotos.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'},
  {
    title: 'Meus Favoritos',
    path: 'home',
    component: HomeComponent},
    {
    title: 'Sobre',
    path: 'sobre',
    component: SobreComponent,
  },
    {
     title: 'Vídeos',
     path: 'videos',
     component: VideosComponent,
    },
    {
      title: 'Fotos',
      path: 'fotos',
      component: FotosComponent,
    },
  {
    path:'favorito-edicao',
    loadChildren: () => import('./modules/favorito-edicao/favorito-edicao.module',).then(m => m.FavoritoEdicaoModule),
  },
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: '/home'
  }
];
