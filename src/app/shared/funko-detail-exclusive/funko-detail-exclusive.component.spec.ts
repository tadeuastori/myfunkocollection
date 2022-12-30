import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkoDetailExclusiveComponent } from './funko-detail-exclusive.component';

describe('FunkoDetailExclusiveComponent', () => {
  let component: FunkoDetailExclusiveComponent;
  let fixture: ComponentFixture<FunkoDetailExclusiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunkoDetailExclusiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunkoDetailExclusiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
