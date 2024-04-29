import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './main/main.component';
import { MainRoutingComponent } from './main/main.routes';
import { TourDetailsComponent } from './main/tour-details/tour-details.component';
import { MainModule } from './main/main.module';
import { ContactUsComponent } from './main/contact-us/contact-us.component';
import { AllInOneToursComponent } from './main/all-in-one-tours/all-in-one-tours.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainRoutingComponent, TourDetailsComponent, MainModule, ContactUsComponent, AllInOneToursComponent, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CreatingMemories';
}
