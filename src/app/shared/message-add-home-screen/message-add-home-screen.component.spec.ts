import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageAddHomeScreenComponent } from './message-add-home-screen.component';

describe('MessageAddHomeScreenComponent', () => {
  let component: MessageAddHomeScreenComponent;
  let fixture: ComponentFixture<MessageAddHomeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageAddHomeScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageAddHomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
