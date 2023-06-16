import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveEnquiryComponent } from './save-enquiry.component';

describe('SaveEnquiryComponent', () => {
  let component: SaveEnquiryComponent;
  let fixture: ComponentFixture<SaveEnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveEnquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
