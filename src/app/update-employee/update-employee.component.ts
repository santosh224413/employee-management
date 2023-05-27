import {Component, OnInit} from '@angular/core';
import {Employee} from "../employee";
import {EmployeeService} from "../employee.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{
  id : any;
  employee : Employee = new Employee();
  constructor(private employeeService : EmployeeService, private activatedRoute : ActivatedRoute, private router : Router) {
  }
  onSubmit() {
  this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
    this.goToEmployeeList();
  })
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.employeeService.getEmployeeByid(this.id).subscribe(data => {
      this.employee=data;
    },
      error => console.log(error));
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }
}
