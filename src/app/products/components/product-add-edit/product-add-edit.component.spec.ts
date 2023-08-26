import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddEditComponent } from './product-add-edit.component';

describe('ProductAddEditComponent', () => {
  let component: ProductAddEditComponent;
  let fixture: ComponentFixture<ProductAddEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductAddEditComponent]
    });
    fixture = TestBed.createComponent(ProductAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
