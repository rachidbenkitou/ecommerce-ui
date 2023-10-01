import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleDetailsListComponent } from './sale-details-list.component';

describe('SaleDetailsListComponent', () => {
  let component: SaleDetailsListComponent;
  let fixture: ComponentFixture<SaleDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleDetailsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
