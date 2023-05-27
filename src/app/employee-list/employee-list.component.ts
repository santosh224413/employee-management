import {Component, OnInit} from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  employees ?: Employee[];
  constructor(private employeeService : EmployeeService, private router : Router) {
  }
  ngOnInit(): void {
    this.getEmployees();
  }
  private getEmployees(){
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    },
      (error : HttpErrorResponse) => {
              alert(error.message);
             });
  }
  updateEmployee(id : any) {
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id : any) {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      this.getEmployees();
    })

  }
}
