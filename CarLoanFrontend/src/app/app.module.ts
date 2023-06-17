import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnquiryModule } from './Module/enquiry/enquiry.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { LoginComponent } from './Components/login/login.component';
=======
import { SavecustomerComponent } from './Model/ApplicationForm/savecustomer/savecustomer.component';
>>>>>>> 987709cf9f119ee7d466ea648e10177fb8ef0e80

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent
=======
    SavecustomerComponent
>>>>>>> 987709cf9f119ee7d466ea648e10177fb8ef0e80
  ],
  imports: [
    BrowserModule,
    EnquiryModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
