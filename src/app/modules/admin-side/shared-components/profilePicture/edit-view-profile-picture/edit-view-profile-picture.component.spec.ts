import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditViewProfilePictureComponent } from './edit-view-profile-picture.component';

describe('EditViewProfilePictureComponent', () => {
  let component: EditViewProfilePictureComponent;
  let fixture: ComponentFixture<EditViewProfilePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditViewProfilePictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditViewProfilePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
