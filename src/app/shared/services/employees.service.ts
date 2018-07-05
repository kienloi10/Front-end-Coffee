import { IEmployee  } from './../../core/models/IEmployee';

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';
import { Identifiers } from '@angular/compiler';

@Injectable()
export class EmployeesService {
  private _employees: BehaviorSubject<Array<IEmployee>> = new BehaviorSubject(new Array());
  private employee: IEmployee;
  get employees() {
    return this._employees.asObservable();
  }
  constructor(private http: Http) { }
  getEmployees() {
    return this.getEmployeesFromServer();
  }
  private getEmployeesFromServer() {
    this.http.get('http://localhost:4147/api/nhanvien/GetAll').subscribe(res => {
      const employees = res.json();
      this._employees.next(employees);
    });
  }
//   getDepartmentsByIdFromServer(id:number) {
//     this.http.get('http://localhost:4147/api/ChiNhanh/GetById/' +id).subscribe(res => {
//       const departments = res.json();
//       this._departments.next(departments);
//     });
//   }

  removeEmployee(id: number) {
    return this.http.delete('http://localhost:4147/api/nhanvien/Delete/' + id).subscribe(() => {
      const index = this._employees.getValue().findIndex(b => b.Id === id);
      this._employees.getValue().splice(index, 1);
      this._employees.next(this._employees.getValue());
    });
  }
  createDepartment(enployAdd: IEmployee) {
    return this.http.post('http://localhost:4147/api/ChiNhanh/create', enployAdd).subscribe(() => {
      this._employees.getValue().push(enployAdd);
      const newEmploy = this._employees.getValue();
      this._employees.next(newEmploy);
    });
  }
//   editDepartment(departEdit: IDepartment) {
//     return this.http.put('http://localhost:4147/api/chinhanh/update', departEdit).subscribe(() => {
//       this._departments.getValue().push(departEdit);
//       const newDepart = this._departments.getValue();
//       this._departments.next(newDepart);
//     });
//   }
  searchEmployee(keyw: string) {

  }

}
