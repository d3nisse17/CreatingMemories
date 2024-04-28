import { Component, OnInit } from '@angular/core';
import { TopNavComponent } from '../../_shared/top-nav/top-nav.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../_shared/footer/footer.component';
import { Router } from '@angular/router';
import { TourPackages } from '../../_shared/models/tour.model';

@Component({
  selector: 'app-tour-details',
  standalone: true,
  imports: [
    TopNavComponent,
    CommonModule,
    FooterComponent,
  ],
  templateUrl: './tour-details.component.html',
  styleUrl: './tour-details.component.scss'
})
export class TourDetailsComponent implements OnInit {
  tourPackages!: TourPackages;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.scrollTo('package-header');
    const sessionPackage = JSON.parse(sessionStorage.getItem('tour-package') as string) as TourPackages;
    if(!!sessionPackage) {
      this.tourPackages = sessionPackage;
    }
  }
  
  back(): void {
    window.history.back();
  }

  goToContactUs() {
    this.router.navigate(['/contact-us']);
  }

  scrollTo(section: string): void {
    debugger
    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
