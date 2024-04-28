import { RouterModule, Routes } from '@angular/router';
import { TourDetailsComponent } from './main/tour-details/tour-details.component';
import { NgModule } from '@angular/core';
import { ContactUsComponent } from './main/contact-us/contact-us.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: ''
      },
      {
        path: '',
        loadChildren: () => import('./main/main.module').then(m => m.MainModule)
      },
      {
        path: 'tour-details/:id',
        component: TourDetailsComponent
      },
      {
        path: 'contact-us',
        component: ContactUsComponent
      }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }