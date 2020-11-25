import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PocFormService {

  constructor(protected http: HttpClient) { }

  postCustomer(requestObj: any): Observable<any>{
    return this.http.post<any>('employee-services/employee/add' , requestObj);
  }
}
