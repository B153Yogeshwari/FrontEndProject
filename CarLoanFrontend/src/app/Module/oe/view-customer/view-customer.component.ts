import { Component } from '@angular/core';
import { CustomerDetails } from 'src/app/Model/customer-details';
import { CustomerServiceService } from 'src/app/shared/customer-service.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent {
  custList:CustomerDetails[];
  constructor(private cs:CustomerServiceService){

  }
  ngOnInit(){
    
  }


}
