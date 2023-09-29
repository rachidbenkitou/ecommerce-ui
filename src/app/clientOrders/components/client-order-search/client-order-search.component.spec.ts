import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientOrderSearchComponent } from './client-order-search.component';

describe('ClientOrderSearchComponent', () => {
  let component: ClientOrderSearchComponent;
  let fixture: ComponentFixture<ClientOrderSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientOrderSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientOrderSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
