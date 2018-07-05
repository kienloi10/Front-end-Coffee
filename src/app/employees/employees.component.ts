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
  chooseEmployees: IEmployee[];

  constructor(private _employeesService: EmployeesService,private _kindEmployService: kindEmployService) { }

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
    
  }

  searchEmploy(keyw: string){
    this.employees = this.chooseEmployees.filter(employ => employ.HoTen.toLowerCase().includes(keyw.toLowerCase()));
  }


}
