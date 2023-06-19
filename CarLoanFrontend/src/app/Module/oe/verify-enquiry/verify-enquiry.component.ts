import { Component } from '@angular/core';
import { EnquiryModel } from 'src/app/Model/enquiry-model';
import { EnquiryServiceService } from 'src/app/shared/enquiry-service.service';

@Component({
  selector: 'app-verify-enquiry',
  templateUrl: './verify-enquiry.component.html',
  styleUrls: ['./verify-enquiry.component.css']
})
export class VerifyEnquiryComponent {

  constructor(public es:EnquiryServiceService){}
elist:EnquiryModel[]
  ngOnInit(){
    this.es.viewEnquiry().subscribe((em:EnquiryModel[])=>
    {this.elist=em})
  }
}
