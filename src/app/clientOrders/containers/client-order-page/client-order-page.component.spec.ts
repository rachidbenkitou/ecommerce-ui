import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientOrderPageComponent } from './client-order-page.component';

describe('ClientOrderPageComponent', () => {
  let component: ClientOrderPageComponent;
  let fixture: ComponentFixture<ClientOrderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientOrderPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientOrderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
