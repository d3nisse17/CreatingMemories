import { RouterModule, Routes } from '@angular/router';
import { TourDetailsComponent } from './main/tour-details/tour-details.component';
import { NgModule } from '@angular/core';
import { ContactUsComponent } from './main/contact-us/contact-us.component';
import { AllInOneToursComponent } from './main/all-in-one-tours/all-in-one-tours.component';

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
      },
      {
        path: 'all-in-one-tours/:id',
        component: AllInOneToursComponent
      }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }