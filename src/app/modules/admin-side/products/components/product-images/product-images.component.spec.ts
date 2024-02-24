import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductImagesComponent } from './product-images.component';

describe('ProductImagesComponent', () => {
  let component: ProductImagesComponent;
  let fixture: ComponentFixture<ProductImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
