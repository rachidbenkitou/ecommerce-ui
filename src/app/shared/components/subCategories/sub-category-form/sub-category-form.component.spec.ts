import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategoryFormComponent } from './sub-category-form.component';

describe('SubCategoryFormComponent', () => {
  let component: SubCategoryFormComponent;
  let fixture: ComponentFixture<SubCategoryFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubCategoryFormComponent]
    });
    fixture = TestBed.createComponent(SubCategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
