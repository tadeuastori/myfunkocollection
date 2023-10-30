import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkoViewComponent } from './funko-view.component';

describe('FunkoViewComponent', () => {
  let component: FunkoViewComponent;
  let fixture: ComponentFixture<FunkoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunkoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunkoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
