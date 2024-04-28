import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { TourDetailsComponent } from './tour-details/tour-details.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'tour-details/:id',
    component: TourDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingComponent { }