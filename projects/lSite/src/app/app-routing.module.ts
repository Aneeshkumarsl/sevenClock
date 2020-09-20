import { NgModule } from '@angular/core';
import { Routes, RouterModule,CanActivate } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { AuthGuard } from './authModule/auth/auth.guard';

const routes: Routes = [

  {
    path:"home",
    canActivate:[AuthGuard],
    loadChildren: () => import('./templates/pages/pages.module').then(r => r.PagesModule)
  },
  {
    path:"",
    loadChildren: ()=> import('./authModule/auth/auth.module').then(r => r.AuthModule)
  },  
  {
    path:"**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
