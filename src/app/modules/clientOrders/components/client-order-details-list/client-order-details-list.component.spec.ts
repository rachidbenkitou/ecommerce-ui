import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientOrderDetailsListComponent } from './client-order-details-list.component';

describe('ClientOrderDetailsListComponent', () => {
  let component: ClientOrderDetailsListComponent;
  let fixture: ComponentFixture<ClientOrderDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientOrderDetailsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientOrderDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
