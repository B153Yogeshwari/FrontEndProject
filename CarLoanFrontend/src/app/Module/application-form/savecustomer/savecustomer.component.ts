import { Component } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


=======
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerServiceService } from 'src/app/shared/customer-service.service';
>>>>>>> c34d520fa31c064e2c0386da492b055a901b00dd

@Component({
  selector: 'app-savecustomer',
  templateUrl: './savecustomer.component.html',
  styleUrls: ['./savecustomer.component.css']
})
export class SavecustomerComponent {
<<<<<<< HEAD
//addCustomer() {
//throw new Error('Method not implemented.');
//}
  saveCustomer: FormGroup;
  selectedphoto: any;
  selectedsignature: any;
  selectedaddressproof: any;
  selectedadharcard: any;
  selectedpancard: any;
  selectedsalaryslip: any;
  selectedincomtaxreturn: any;
=======
  saveCustomer:FormGroup;
  selectedphoto:any;
  selectedsignature:any;
  selectedaddressproof:any;
  selectedadharcard:any;
  selectedpancard:any;
  selectedsalaryslip:any;
  selectedincomtaxreturn:any;
 constructor(private fb:FormBuilder,private cs:CustomerServiceService){

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
  'ifscCode':[''],
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
>>>>>>> c34d520fa31c064e2c0386da492b055a901b00dd
  
constructor(private fb:FormBuilder) {
}
 ngOnInit(){
  
    this.saveCustomer = this.fb.group({
      'customerId': ['',Validators.required],
      'customerFirstName': ['',Validators.required],
      'customerMiddleName': ['',Validators.required],
      'customerLastName': ['',Validators.required],
      'customerDateOfBirth': ['',Validators.required],
      'customerMobileNumber': ['',Validators.required],
      'customerAdditionalMobileNumber': ['',Validators.required],
      'customerPanCard':['',Validators.required],
      'customerAdharNumber': ['',Validators.required],
      'gender': ['',Validators.required],
      'customerEmailId': ['',Validators.required],
      'customerTotalLoanRequired': ['',Validators.required],
  
    'customerAddress': this.fb.group({
      'customerAddressId': ['',Validators.required],
    'permanentAddress': this.fb.group({
      'permanentAddressId': ['',Validators.required],
          'permanentAreaName':  ['',Validators.required],
          'permanentCityName': ['', Validators.required],
          'permanentDistrict': ['', Validators.required],
          'permanentState': ['', Validators.required],
          'permanentPincode': ['', Validators.required],
          'permanentHouseNumber': ['',Validators.required],
          'permanentStreetName': ['',Validators.required]
        }),
        'localAddress': this.fb.group({
          'localAddressId': ['',Validators.required],
          'localAreaName': ['', Validators.required],
          'localCityName': ['', Validators.required],
          'localDistrict': ['', Validators.required],
          'localState': ['', Validators.required],
          'localPincode': ['', Validators.required],
          'localHouseNumber': ['',Validators.required],
          'localStreetName': ['',Validators.required]
        })
      }),
      'accountDetails': this.fb.group({
        'accountId': ['',Validators.required],
        'accountNumber': ['', Validators.required],
        'accountHolderName': ['',Validators.required],
        'accountType': ['',Validators.required],
        'iFSCCode': ['',Validators.required],
        'bankName': ['',Validators.required]
      }),
      'gurantorDetails': this.fb.group({
        'guarantorId': ['',Validators.required],
        'guarantorName': ['', Validators.required],
        'guarantorDateOfBirth': ['', Validators.required],
        'guarantorRelationshipWithCustomer': ['', Validators.required],
        'guarantorMobileNumber': ['',Validators.required],
        'guarantorAdharCardNo': ['',Validators.required],
        'guarantorJobDetails': ['',Validators.required],
        'guarantorAddress': ['',Validators.required]
      }),
      'documents': this.fb.group({
        'documentId': ['',Validators.required]
      })
    })
  }

  onchangephoto(event: any) {
    this.selectedphoto = event.target.files[0];
  }
  onchangepancard(event: any) {
    this.selectedpancard = event.target.files[0];
  }
  onchangesignature(event: any) {
    this.selectedsignature = event.target.files[0];
  }
  onchangeadharcard(event: any) {
    this.selectedadharcard = event.target.files[0];
  }
  onchangeaddressproof(event: any) {
    this.selectedaddressproof = event.target.files[0];
  }
  onchangesalaryslip(event: any) {
    this.selectedsalaryslip = event.target.files[0];
  }
  onchangeincometaxreturn(event: any) {
    this.selectedincomtaxreturn = event.target.files[0];
  }
  step = 0;

  next() {
    this.step++;
  }

  previous() {

    this.step--;
  }


saveCustomerForm() {
  console.warn(this.saveCustomer.value);
}

<<<<<<< HEAD
get customerId() {
  return this.saveCustomer.get('customerId');
=======
saveCustomerData(){
  var customer=JSON.stringify(this.saveCustomer.value);
  console.log(this.saveCustomer.value);
  const formData=new FormData();
  formData.append("photo",this.selectedphoto);
  formData.append("signature",this.selectedsignature);
  formData.append("panCard",this.selectedpancard);
  formData.append("adharCard",this.selectedadharcard);
  formData.append("addressProof",this.selectedaddressproof);
  formData.append("salarySlip",this.selectedsalaryslip);
  formData.append("incomeTaxReturn",this.selectedincomtaxreturn);
  formData.append("allData",customer);
  this.cs.saveCustomerData(formData).subscribe((response)=>{
    alert(response)
  })

>>>>>>> c34d520fa31c064e2c0386da492b055a901b00dd
}

get customerFirstName() {
  return this.saveCustomer.get('customerFirstName');
}

get customerMiddleName() {
  return this.saveCustomer.get('customerMiddleName');
}

get customerAdditionalMobileNumber()
{
  return this.saveCustomer.get('customerAdditionalMobileNumber');
}

get customerPanCard()
{
  return this.saveCustomer.get('customerPanCard');
}

get customerAdharNumber()
{
  return this.saveCustomer.get('customerAdharNumber');
}

get gender(){
  return this.saveCustomer.get('gender');
}

get customerEmailId(){
  return this.customerEmailId.get('customerEmailId');
}

get customerTotalLoanRequired(){
  return this.customerTotalLoanRequired.get('customerTotalLoanRequired');
}

}
