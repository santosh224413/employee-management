import {Component, OnInit} from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{
  employee : Employee = new Employee();
  constructor(private employeeService : EmployeeService, private router : Router) {
  }
  ngOnInit(): void {
  }
  saveEmployee(){
    this.employeeService.addEmployee(this.employee).subscribe(data =>{
        this.goToEmployeeList();
    },
      error => console.log(error));
  }
  goToEmployeeList(){
    this.router.navigate(['/employees'])
  }
  onSubmit() {
   this.saveEmployee();
  }

  protected readonly Employee = Employee;
}
