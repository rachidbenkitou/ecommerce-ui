import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsOfACategoryComponent } from './products-of-a-category.component';

describe('ProductsOfACategoryComponent', () => {
  let component: ProductsOfACategoryComponent;
  let fixture: ComponentFixture<ProductsOfACategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsOfACategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsOfACategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
