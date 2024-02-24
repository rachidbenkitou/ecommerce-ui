import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertInfoComponent } from './alert-info.component';

describe('AlertInfoComponent', () => {
  let component: AlertInfoComponent;
  let fixture: ComponentFixture<AlertInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
