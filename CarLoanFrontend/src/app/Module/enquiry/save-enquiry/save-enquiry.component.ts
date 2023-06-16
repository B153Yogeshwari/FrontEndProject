import { Component } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { EnquiryServiceService } from 'src/app/shared/enquiry-service.service';

@Component({
  selector: 'app-save-enquiry',
  templateUrl: './save-enquiry.component.html',
  styleUrls: ['./save-enquiry.component.css']
})
export class SaveEnquiryComponent  {

constructor(private fb:FormBuilder,private enquiryservice:EnquiryServiceService){

}
saveForm:FormGroup;
ngOnInit(){
  this.saveForm=this.fb.group({
    'customerId':[],
    'firstName' : [''],
    'lastName' : [''],
    'age' : [],
    'emailId' : [''],
    'mobileNumber' : [],
    'adharNumber' : [],
    'panCardNumber' : ['']
  })
}

saveEnquiry(){
this.enquiryservice.saveEnquiry(this.saveForm.value).subscribe((response)=>{
  alert(response)
})
}
}
