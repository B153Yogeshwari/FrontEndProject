import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnquiryModule } from './Module/enquiry/enquiry.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Components/login/login.component';
import { ApplicationFormModule } from './Module/application-form/application-form.module';

import { SavecustomerComponent } from './Module/application-form/savecustomer/savecustomer.component';
import { EmicalculatorComponent } from './Components/emicalculator/emicalculator.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { HeaderComponent } from './Components/header/header.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,


        DashboardComponent,
        AboutusComponent,
        EmicalculatorComponent,
        HeaderComponent,

    
  ],
  imports: [
    BrowserModule,
    EnquiryModule,
    AppRoutingModule,
    ApplicationFormModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
