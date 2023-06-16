import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-save-enquiry',
  templateUrl: './save-enquiry.component.html',
  styleUrls: ['./save-enquiry.component.css']
})
export class SaveEnquiryComponent  {

constructor(private fb:FormBuilder){

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

}
