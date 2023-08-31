import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestOrderPageComponent } from './guest-order-page.component';

describe('GuestOrderPageComponent', () => {
  let component: GuestOrderPageComponent;
  let fixture: ComponentFixture<GuestOrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestOrderPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
