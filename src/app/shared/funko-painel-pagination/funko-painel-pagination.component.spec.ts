import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkoPainelPaginationComponent } from './funko-painel-pagination.component';

describe('FunkoPainelPaginationComponent', () => {
  let component: FunkoPainelPaginationComponent;
  let fixture: ComponentFixture<FunkoPainelPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunkoPainelPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunkoPainelPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
