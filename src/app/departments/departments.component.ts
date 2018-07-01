import { DepartmentsService } from './../shared/services/departments.service';
import { Component, OnInit } from '@angular/core';
import { IDepartment } from '../core/models/IDepartment';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  departments: IDepartment[];
  chooseDeparts: IDepartment[];
  departAdding: IDepartment = {
    Id: 0,
    ChiNhanhId: '',
    TenChiNhanh: '',
    DiaChi: '',
    NgayThanhLap: ''
  };
  private keyw: string;
  constructor(private _departmentsService: DepartmentsService) { }

  ngOnInit() {
    this._departmentsService.getDepartments();
    this._departmentsService.departments.subscribe(departments => {
      this.departments = departments;
      this.chooseDeparts = departments;
    });
  }

  delDepartment(depart: IDepartment) {
     this._departmentsService.removeDepartment(depart.Id);
    console.log(depart.Id);
  }
  searchDepart(keyw: string) {
    this.departments = this.chooseDeparts.filter(depart => depart.TenChiNhanh.toLowerCase().includes(keyw.toLowerCase()));
  }
  addDepartment(departAdding) {
    this._departmentsService.createDepartment(departAdding);
  }
}
