import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySearchComponent } from './category-search.component';

describe('CategorySearchComponent', () => {
  let component: CategorySearchComponent;
  let fixture: ComponentFixture<CategorySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorySearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
