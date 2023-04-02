import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkoFormComponent } from './funko-form.component';

describe('FunkoFormComponent', () => {
  let component: FunkoFormComponent;
  let fixture: ComponentFixture<FunkoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunkoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunkoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
