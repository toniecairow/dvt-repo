import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsDetailViewComponent } from './pages/artists-detail-view/artists-detail-view.component';
import { ArtistsListViewComponent } from './pages/artists-list-view/artists-list-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'artists',
    pathMatch: 'full'
  },
  {
    path: 'artists',
    component: ArtistsListViewComponent
  },
  {
    path: 'artists/:id',
    component: ArtistsDetailViewComponent
  },
  {
    path: '**',
    redirectTo: 'artists'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
