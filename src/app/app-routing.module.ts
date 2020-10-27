import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './Public/pages/home/home.module';


const routes: Routes = [
  {
path: 'home', loadChildren: () => import ('../app/Public/pages/home/home.module').then (m => m.HomeModule),

  },
  {
path: 'contact', loadChildren: () => import ('../app/Public/pages/contact/contact.module').then (m => m.ContactModule)
      },
      {
        path: '', pathMatch: 'full', redirectTo : 'home'
      },
{
  path: '**', pathMatch: 'full', redirectTo : 'home'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
    useHash: true,
    scrollPositionRestoration: 'enabled'
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
