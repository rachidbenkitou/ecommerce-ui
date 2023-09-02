import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMultiImagesComponent } from './upload-multi-images.component';

describe('UploadMultiImagesComponent', () => {
  let component: UploadMultiImagesComponent;
  let fixture: ComponentFixture<UploadMultiImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadMultiImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadMultiImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
