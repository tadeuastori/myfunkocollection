import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkoDetailStampComponent } from './funko-detail-stamp.component';

describe('FunkoDetailStampComponent', () => {
  let component: FunkoDetailStampComponent;
  let fixture: ComponentFixture<FunkoDetailStampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunkoDetailStampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunkoDetailStampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
