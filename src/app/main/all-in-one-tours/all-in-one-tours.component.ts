import { Component, OnInit } from '@angular/core';
import { TopNavComponent } from '../../_shared/top-nav/top-nav.component';
import { FooterComponent } from '../../_shared/footer/footer.component';
import { AllInOneTourPackages } from '../../_shared/models/tour.model';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-all-in-one-tours',
  standalone: true,
  imports: [TopNavComponent,FooterComponent, CommonModule, ContactUsComponent],
  templateUrl: './all-in-one-tours.component.html',
  styleUrl: './all-in-one-tours.component.scss'
})
export class AllInOneToursComponent implements OnInit {

  tourPackages!: AllInOneTourPackages;
  tour!: any;
  allInOneTourPackages: AllInOneTourPackages[] = [{
      img:'assets/images/4d3nTour.png',
      title: '4 Days and 3 nights El Nido Tour',
      price: 'For only Php6500/Head',
      tourItinerary: [{
        tourImg:'',
        day: 'Day 1',
        tourTitle: 'Arrival at Puerto Princesa City International Airport and Traveling to El Nido',
        places: []
      },
      {
        tourImg:'assets/images/TourA.png',
        day: 'Day 2',
        tourTitle:'ISLAND HOPPING TOUR A',
        places: [
          'Big Lagoon',
          'Payong-Payong Beach',
          'Seven Commandos Beach',
          'Shimuzu Island',
          'Secret Lagoon'
        ]
      },
      {
        tourImg:'assets/images/TourC.png',
        day: 'Day 3',
        tourTitle:'ISLAND HOPPING TOUR C',
        places: [
          'Helicopter Island',
          'Matinloc Shrine',
          'Hidden Beach',
          'Secret Beach',
          'Talisay Beach'
        ]
      },
      {
        tourImg:'',
        day: 'Day 4',
        tourTitle:'Travel from El Nido to Puerto Princesa City International Airport',
        places: []
      }
    ],
    inclusion: [
      'Roundtrip Shuttle transportation from Puerto Princesa International Airport to El Nido and vice versa',
      '2 days island hopping tours',
      '4 days and 3 nights stay in economy hotel with DAILY BREAKFAST',
      'Lagoon entrance fee permit for TOUR A',
      'Hotel Pick Up within El Nido Town Proper',
      'Vaccinated and licensed Tour Guide',
      'Guide Tourist Boat',
      'Boat Steward',
      'BUFFET Lunch',
      'Water Drinks',
      'Fruits in Season',
      'Boat with life jacket'
    ],
    exclusion:[
      'Note: Airfare NOT included in the Package',
      'Drop Service after tour (El Nido)',
      'Centralized Kayak',
      'Eco-Tourism Development Fund (ETDF) of Php 400/head',
      'Snorkeling mask and gears',
      'Other personal expenses'
    ]
  }
]

  ngOnInit(): void {
    this.scrollTo('package-header');
    const sessionPackage = JSON.parse(sessionStorage.getItem('all-in-one-tour-package') as string) as any;
    if(!!sessionPackage) {
      this.tour = sessionPackage;
      this.tourPackages = this.allInOneTourPackages.find(x => x.title === this.tour.title && x.price === this.tour.price)!;
    }
  }

  back(): void {
    window.history.back();
  }

  scrollTo(section: string): void {
    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
