import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnquiryModel } from '../Model/enquiry-model';

@Injectable({
  providedIn: 'root'
})
export class EnquiryServiceService {

  constructor(private http:HttpClient) { }

  saveEnquiry(e:EnquiryModel){
   return this.http.post("http://localhost:9191/enquiry/savedata",e,{responseType:'text' as 'json'})

  }

  viewEnquiry(){
    return this.http.get("http://localhost:9191/enquiry/getalldata")
  }
}
