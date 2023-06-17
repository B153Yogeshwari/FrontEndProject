import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaveEnquiryComponent } from './Module/enquiry/save-enquiry/save-enquiry.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  {
    path : '', component : SaveEnquiryComponent, pathMatch:'full'
  },
  {
    path : 'login', component : LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
