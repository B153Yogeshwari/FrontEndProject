import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyEnquiryComponent } from './verify-enquiry.component';

describe('VerifyEnquiryComponent', () => {
  let component: VerifyEnquiryComponent;
  let fixture: ComponentFixture<VerifyEnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyEnquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
