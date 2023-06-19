import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnquiryModule } from './Module/enquiry/enquiry.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { LoginComponent } from './Components/login/login.component';
import { SavecustomerComponent } from './Module/ApplicationForm/savecustomer/savecustomer.component';

=======
<<<<<<< HEAD

=======
>>>>>>> 158c8d1f5d6f0aba5a5f2a31f990aa72776b402e
import { LoginComponent } from './Components/login/login.component';
import { SavecustomerComponent } from './Module/ApplicationForm/savecustomer/savecustomer.component';


<<<<<<< HEAD
 
=======
>>>>>>> 158c8d1f5d6f0aba5a5f2a31f990aa72776b402e
>>>>>>> 13575445df3d65d7c5182340c9c57e996da223b1

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoginComponent,
    SavecustomerComponent
=======

    LoginComponent,
<<<<<<< HEAD

=======
>>>>>>> 158c8d1f5d6f0aba5a5f2a31f990aa72776b402e
    SavecustomerComponent

>>>>>>> 13575445df3d65d7c5182340c9c57e996da223b1
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
