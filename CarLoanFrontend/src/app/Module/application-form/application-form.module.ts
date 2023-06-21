import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SavecustomerComponent } from './savecustomer/savecustomer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SavecustomerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ApplicationFormModule { }
