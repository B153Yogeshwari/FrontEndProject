import { AccountDetails } from "./account-details";
import { AllPersonalDocuments } from "./all-personal-documents";
import { CustomerAddress } from "./customer-address";
import { GuarantorDetails } from "./guarantor-details";

export class CustomerDetails {
     customerId:number;
	 customerFirstName:string;
	 customerMiddleName:string;
	 customerLastName:string;
	 customerDateOfBirth:string;
	 customerMobileNumber:number;
	 customerAdditionalMobileNumber:number;
	 customerPanCard:string;
	 customerAdharNumber:number;
	 gender:string;
	 customerQualification:string;
	 customerEmailId:string;
	 customerTotalLoanRequired:number;
     customerAddress:CustomerAddress;
	 accountDetails:AccountDetails;
	 gurantorDetails:GuarantorDetails;
	 documents:AllPersonalDocuments;
}
