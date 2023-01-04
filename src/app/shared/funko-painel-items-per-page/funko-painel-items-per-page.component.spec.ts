import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkoPainelItemsPerPageComponent } from './funko-painel-items-per-page.component';

describe('FunkoPainelItemsPerPageComponent', () => {
  let component: FunkoPainelItemsPerPageComponent;
  let fixture: ComponentFixture<FunkoPainelItemsPerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunkoPainelItemsPerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunkoPainelItemsPerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
