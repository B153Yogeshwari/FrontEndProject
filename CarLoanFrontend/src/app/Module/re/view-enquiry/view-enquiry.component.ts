import { Component } from '@angular/core';
import { EnquiryModel } from 'src/app/Model/enquiry-model';
import { EnquiryServiceService } from 'src/app/shared/enquiry-service.service';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.css']
})
export class ViewEnquiryComponent {

constructor(public es:EnquiryServiceService){}
elist:EnquiryModel[]
  ngOnInit(){
    this.es.viewEnquiry().subscribe((em:EnquiryModel[])=>
    {this.elist=em})
  }
}
