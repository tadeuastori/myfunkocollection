import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkoPainelComponent } from './funko-painel.component';

describe('FunkoPainelComponent', () => {
  let component: FunkoPainelComponent;
  let fixture: ComponentFixture<FunkoPainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunkoPainelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunkoPainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
