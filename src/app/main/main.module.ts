import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAccordionModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './main.component';
import { MainRoutingComponent } from './main.routes';
import { TourDetailsComponent } from './tour-details/tour-details.component';
import { TopNavComponent } from '../_shared/top-nav/top-nav.component';
import { FooterComponent } from '../_shared/footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    NgbModule,
    MainRoutingComponent,
    NgbModule,
    NgbAccordionModule,
    TourDetailsComponent,
    TopNavComponent,
    FooterComponent,
    ContactUsComponent
  ],
  providers: [],
  bootstrap: []
})
export class MainModule { }
