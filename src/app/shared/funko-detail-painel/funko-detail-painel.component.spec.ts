import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkoDetailPainelComponent } from './funko-detail-painel.component';

describe('FunkoDetailPainelComponent', () => {
  let component: FunkoDetailPainelComponent;
  let fixture: ComponentFixture<FunkoDetailPainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunkoDetailPainelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunkoDetailPainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
