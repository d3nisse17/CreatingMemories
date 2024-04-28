import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCarousel, NgbCarouselModule, NgbModule, NgbSlideEvent, NgbSlideEventSource, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from '../_shared/footer/footer.component';
import { TopNavComponent } from '../_shared/top-nav/top-nav.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { MainRoutingComponent } from './main.routes';
import { TourPackages } from '../_shared/models/tour.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  images = ['assets/images/header.png','assets/images/1.png','assets/images/2.png','assets/images/3.png','assets/images/4.png']
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
  tourPackages:TourPackages[] = [
    {
      img: 'assets/images/TourA.png',
      title: 'Tour A',
      price: 'Php 1,200.00',
      places: [
        'Big Lagoon',
        'Payong-Payong Beach',
        'Seven Commandos Beach',
        'Shimuzu Island',
        'Secret Lagoon'
      ]
    },
    {
      img:'assets/images/TourB.png',
      title: 'Tour B',
      price: 'Php 1,300.00',
      places: [
        'Snake Island',
        'Pinagbuyatan Island',
        'Entalula Beach',
        'Cathedral Cave',
        'Cudugon Cave',
      ]
    },
    {
      img:'assets/images/TourC.png',
      title: 'Tour C',
      price: 'Php 1,400.00',
      places: [
        'Helicopter Island',
        'Matinloc Shrine',
        'Hidden Beach',
        'Secret Beach',
        'Talisay Beach'
      ]
    },
    {
      img:'assets/images/TourD.png',
      title: 'Tour D',
      price: 'Php 1,200.00',
      places: [
        'Small Lagoon',
        'Paradise Beach',
        'Cadlao Lagoon',
        'Pasandigan Cove',
        'Bukal Island',
      ]
    }
  ]

  constructor(private router: Router) {}

  ngOnInit(): void {
    sessionStorage.removeItem('tour-package');
    this.scrollTo('main-header');
  }

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel | undefined;
  carousel1!: NgbCarousel;


  togglePaused(): void {
    if (this.paused) {
      this.carousel1.cycle();
    } else {
      this.carousel1.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent): void {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

  scrollTo(section: string): void {
    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  goToPackage(tour: TourPackages) {
    sessionStorage.setItem('tour-package',JSON.stringify(tour));
    this.router.navigate(['/tour-details',tour.title]);
  }

  goToContactUs() {
    this.router.navigate(['/contact-us']);
  }
}
