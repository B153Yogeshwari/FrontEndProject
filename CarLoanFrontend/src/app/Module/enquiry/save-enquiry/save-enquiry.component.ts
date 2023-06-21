import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EnquiryServiceService } from 'src/app/shared/enquiry-service.service';

@Component({
  selector: 'app-save-enquiry',
  templateUrl: './save-enquiry.component.html',
  styleUrls: ['./save-enquiry.component.css']
})
export class SaveEnquiryComponent {

  saveForm: FormGroup; // Declare saveForm property

  constructor(private fb: FormBuilder, private enquiryservice: EnquiryServiceService) {
    this.saveForm = this.fb.group({
      'firstName': new FormControl('', [Validators.required]),
      'lastName' : new FormControl('', [Validators.required]),
      'age' : new FormControl('', [Validators.required]),
      'emailId' : new FormControl('', [Validators.required, Validators.email]),
      'mobileNumber' : new FormControl('', [Validators.required, Validators.minLength(10)]),
      'adharNumber' : new FormControl('', [Validators.required, Validators.minLength(12)]),
      'panCardNumber' : new FormControl('', [Validators.required, Validators.minLength(15)])
    });
  }

  saveUser() {
    console.warn(this.saveForm.value);
  }

  get firstName() {
    return this.saveForm.get('firstName');
  }

  get lastName()
  {
    return this.saveForm.get('lastName');
  }

  get age()
  {
    return this.saveForm.get('age');
  }

  get emailId()
  {
    return this.saveForm.get('emailId');
  }
  
  get mobileNumber()
  {
    return this.saveForm.get('mobileNumber');
  }

  get adharNumber()
  {
    return this.saveForm.get('adharNumber');
  }

  get panCardNumber()
  {
    return this.saveForm.get('panCardNumber');
  }
  saveEnquiry(){
    this.enquiryservice.saveEnquiry(this.saveForm.value).subscribe((response)=>{
      alert(response)
     })
     }
    
}


// saveForm:FormGroup;
// ngOnInit(){
//   this.saveForm=this.fb.group({
//     'customerId':['', Validators.required],
//     'firstName' : ['', Validators.required],
//     'lastName' : ['', Validators.required],
//     'age' : ['', Validators.required],
//     'emailId' : ['', Validators.required, Validators.email],
//     'mobileNumber' : ['', Validators.required, Validators.minLength(10)],
//     'adharNumber' : ['', Validators.required, Validators.minLength(12)],
//     'panCardNumber' : ['', Validators.required, Validators.minLength]
//   })
// }

// saveUser()
// {
//   console.warn(this.saveForm.value);
// }

// get customerId()
// {
//   return this.saveForm.get(this.customerId)
// }

 
