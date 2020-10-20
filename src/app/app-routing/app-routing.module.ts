import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectoryComponent } from '../directory/directory.component';
import { MainpgComponent } from '../mainpg/mainpg.component';
import { SearchPageComponent } from '../app/search-page/search-page.component';
import { ResultsComponent } from '../results/results.component';

const routes: Routes = [
  { path: '', redirectTo: 's', pathMatch: 'full' },
  {
    path: 'rooms/:id',
    component: DirectoryComponent,
  },
  {
    path: 'all',
    component: MainpgComponent,
  },
  {
    path: 's',
    component: SearchPageComponent,
  },
  {
    path:'results',
    component: ResultsComponent,
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
