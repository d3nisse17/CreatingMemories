import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInOneToursComponent } from './all-in-one-tours.component';

describe('AllInOneToursComponent', () => {
  let component: AllInOneToursComponent;
  let fixture: ComponentFixture<AllInOneToursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllInOneToursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllInOneToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
