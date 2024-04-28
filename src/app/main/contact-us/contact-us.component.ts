import { Component } from '@angular/core';
import { TopNavComponent } from '../../_shared/top-nav/top-nav.component';
import { FooterComponent } from '../../_shared/footer/footer.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [TopNavComponent,FooterComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  back(): void {
    window.history.back();
  }
}
