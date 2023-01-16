import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkoImageCarouselComponent } from './funko-image-carousel.component';

describe('FunkoImageCarouselComponent', () => {
  let component: FunkoImageCarouselComponent;
  let fixture: ComponentFixture<FunkoImageCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunkoImageCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunkoImageCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
