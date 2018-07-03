import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../shared/services/employees.service';
import { IEmployee } from '../core/models/IEmployee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees: IEmployee[];
  constructor(private _employeesService: EmployeesService) { }

  ngOnInit() {
    this._employeesService.getEmployees();
    this._employeesService.employees.subscribe(employees => {
    this.employees = employees;
    });
  }

}
