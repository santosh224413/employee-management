import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee";


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private baseURL = "http://localhost:8080/hr/employees";
  constructor(private httpClient : HttpClient) {}
  public getEmployees() : Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}/all`);
  }

}
