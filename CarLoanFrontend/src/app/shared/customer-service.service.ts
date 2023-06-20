import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http:HttpClient) { }

  saveCustomerData(c:any){
    console.log(c);
    return this.http.post("http://localhost:9191/postCustomer",c,{responseType:'text' as 'json'});
  }
}
