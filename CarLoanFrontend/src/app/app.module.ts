import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnquiryModule } from './Module/enquiry/enquiry.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Components/login/login.component';
import { ApplicationFormModule } from './Module/application-form/application-form.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  
    LoginComponent,
    

  ],
  imports: [
    BrowserModule,
    EnquiryModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ApplicationFormModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
