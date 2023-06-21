import { Component } from '@angular/core';

@Component({
  selector: 'app-emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.css']
})
export class EmicalculatorComponent {
  loanAmount: number;
  interestRate: number;
  loanTerm: number;
  emiAmount: number;

  calculateEMI() {
    const principal = this.loanAmount;
    const rateOfInterest = this.interestRate / 12 / 100; // Monthly interest rate
    const numberOfPayments = this.loanTerm;
    
    const emi =
      (principal * rateOfInterest * Math.pow(1 + rateOfInterest, numberOfPayments)) /
      (Math.pow(1 + rateOfInterest, numberOfPayments) - 1);

    this.emiAmount = emi;
  }
}
