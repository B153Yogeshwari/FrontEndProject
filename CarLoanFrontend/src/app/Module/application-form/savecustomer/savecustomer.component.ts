import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-savecustomer',
  templateUrl: './savecustomer.component.html',
  styleUrls: ['./savecustomer.component.css']
})
export class SavecustomerComponent {
  saveCustomer:FormGroup;
  selectedphoto:any;
  selectedsignature:any;
  selectedaddressproof:any;
  selectedadharcard:any;
  selectedpancard:any;
  selectedsalaryslip:any;
  selectedincomtaxreturn:any;
 constructor(private fb:FormBuilder){

 }
 ngOnInit(){
  this.saveCustomer=this.fb.group({
    'customerId':[],'customerFirstName':[''],
    'customerMiddleName':[''],'customerLastName':[''],
    'customerDateOfBirth':[''],'customerMobileNumber':[],
    'customerAdditionalMobileNumber':[],
    'customerPanCard':[''],'customerAdharNumber':[],
    'gender':[''],'customerQualification':[''],
    'customerEmailId':[''],
    'customerTotalLoanRequired':[],
    'customerAddress':this.fb.group({
      'customerAddressId':[],
      'permanentAddress':this.fb.group({
     'permanentAddressId':[],'permanentAreaName':[''],
     'permanentCityName':[''],'permanentDistrict':[''],
     'permanentState':[''],'permanentPincode':[],
     'permanentHouseNumber':[],'permanentStreetName':['']
    }),
    'localAddress':this.fb.group({
      'localAddressId':[],'localAreaName':[''],
      'localCityName':[''],'localDistrict':[''],
      'localState':[''],
    'localPincode':[],'localHouseNumber':[],
    'localStreetName':[''] 
    })
   }),
'accountDetails':this.fb.group({
  'accountId':[],'accountNumber':[],
  'accountHolderName':[''],
  'accountType':[''],
  'iFSCCode':[''],
  'bankName':['']
}),
'gurantorDetails':this.fb.group({
  'guarantorId':[],
	 'guarantorName':[''],
	 'guarantorDateOfBirth':[''],
	 'guarantorRelationshipWithCustomer':[''],	
	 'guarantorMobileNumber':[],
	'guarantorAdharCardNo':[],	
	 'guarantorJobDetails':[''],	
	 'guarantorAddress':['']
}),
'documents':this.fb.group({
  'documentId':[]
})
  })
 }

 onchangephoto(event:any){
  this.selectedphoto=event.target.files[0];
}
onchangepancard(event:any){
  this.selectedpancard=event.target.files[0];
}
onchangesignature(event:any){
  this.selectedsignature=event.target.files[0];
}
onchangeadharcard(event:any){
  this.selectedadharcard=event.target.files[0];
}
onchangeaddressproof(event:any){
  this.selectedaddressproof=event.target.files[0];
}
onchangesalaryslip(event:any){
  this.selectedsalaryslip=event.target.files[0];
}
onchangeincometaxreturn(event:any){
  this.selectedincomtaxreturn=event.target.files[0];
}
  step =0;
  
  next(){
    this.step++;
  }
  
  previous(){
    
    this.step--;
}




}
