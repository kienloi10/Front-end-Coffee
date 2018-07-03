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
  editDepartments: IDepartment[];
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

  getByIdDepartment(depart: IDepartment) {
    console.log(depart.Id);
    this._departmentsService.getDepartmentsByIdFromServer(depart.Id);
    this._departmentsService.departments.subscribe(departments => {
    this.editDepartments = departments;
    });
    console.log(depart.ChiNhanhId);
    console.log(depart.DiaChi);
    console.log(depart.TenChiNhanh);
    console.log(depart.NgayThanhLap);
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
