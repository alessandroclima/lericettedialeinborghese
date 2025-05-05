import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMobileComponent } from './carousel-mobile.component';

describe('CarouselMobileComponent', () => {
  let component: CarouselMobileComponent;
  let fixture: ComponentFixture<CarouselMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
