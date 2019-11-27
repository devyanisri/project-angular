import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Employee } from './employee';
import { JobInfo } from './job-info';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  
  constructor(private httpclient: HttpClient) { }
  getJobDesc() {
    console.log("test call");
    return this.httpclient.get<JobInfo[]>('http://localhost:8080/viewjobdesc');
  }

  getProfile() {
    console.log("test call");
    return this.httpclient.get<Employee[]>('http://localhost:8080/viewprofile');
  }
  
  public createprofile(employee:Employee) {
    console.log("Data entered successfully");
    return this.httpclient.post<Employee>("http://localhost:8080/addprofile", employee);
  }
}
