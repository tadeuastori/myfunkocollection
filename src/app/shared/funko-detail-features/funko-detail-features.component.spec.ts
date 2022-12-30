import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkoDetailFeaturesComponent } from './funko-detail-features.component';

describe('FunkoDetailFeaturesComponent', () => {
  let component: FunkoDetailFeaturesComponent;
  let fixture: ComponentFixture<FunkoDetailFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunkoDetailFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunkoDetailFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
