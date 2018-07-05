import { IDepartment } from './../core/models/IDepartment';
import { DepartmentsService } from './../shared/services/departments.service';
import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../shared/services/employees.service';
import { IEmployee } from '../core/models/IEmployee';
import { kindEmployService } from '../shared/services/kindEmploy.service';
import { IKindEmploy } from '../core/models/IKindEmploy';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees: IEmployee[];
  kindEmploys: IKindEmploy[];
  departments: IDepartment[];
  chooseEmployees: IEmployee[];

  constructor(private _employeesService: EmployeesService,private _kindEmployService: kindEmployService ,private _departmentsService: DepartmentsService) { }

  ngOnInit() {
    this._employeesService.getEmployees();
    this._employeesService.employees.subscribe(employees => {
    this.employees = employees;
    this.chooseEmployees = employees;  
    });

    this._kindEmployService.getKindEmploys();
    this._kindEmployService.kindEmploys.subscribe(kindEmploy =>{
    this.kindEmploys = kindEmploy;
    });

    this._departmentsService.getDepartments();
    this._departmentsService.departments.subscribe(departments => {
    this.departments = departments;
    });
    
  }
  delEmploy(employ: IEmployee) {
    this._employeesService.removeEmployee(employ.Id);
   console.log(employ.Id);
 }




  searchEmploy(keyw: string){
    this.employees = this.chooseEmployees.filter(employ => employ.HoTen.toLowerCase().includes(keyw.toLowerCase()));
  }

  // searchDepart(keyw: string){
  //   this.employees = this.chooseEmployees.filter(employ => employ.HoTen.toLowerCase().includes(keyw.toLowerCase()));
  // }
}
