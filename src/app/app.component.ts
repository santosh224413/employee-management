import {Component, OnInit} from '@angular/core';
import {Employee} from "./employee";
import {EmployeeService} from "./employee.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  employees ?: Employee[];

  constructor(private employeeService : EmployeeService) {
  }

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(){
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  protected readonly Employee = Employee;
}