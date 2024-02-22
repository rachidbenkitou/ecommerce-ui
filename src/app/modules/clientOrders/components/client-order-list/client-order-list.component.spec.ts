import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientOrderListComponent } from './client-order-list.component';

describe('ClientOrderListComponent', () => {
  let component: ClientOrderListComponent;
  let fixture: ComponentFixture<ClientOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientOrderListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
