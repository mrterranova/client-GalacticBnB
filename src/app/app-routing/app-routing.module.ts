import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectoryComponent } from '../directory/directory.component';
import { MainpgComponent } from '../mainpg/mainpg.component';

const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  {
    path: 'rooms/:id',
    component: DirectoryComponent,
  },
  {
    path: 'all',
    component: MainpgComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
