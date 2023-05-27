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
  public getEmployeeByid(id : any) : Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/find/${id}`)
  }
  public addEmployee(employee: Employee) : Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.baseURL}/add`, employee);
  }
  public updateEmployee(id : any, employee: Employee,) : Observable<Employee>{
    return this.httpClient.put<Employee>(`${this.baseURL}/update/${id}`, employee);
  }
  public deleteEmployee(id : any) : Observable<void>{
    return this.httpClient.delete<void>(`${this.baseURL}/delete/${id}`)
  }
}
