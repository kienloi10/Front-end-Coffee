import { IDepartment } from './../../core/models/IDepartment';

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';
import { Identifiers } from '@angular/compiler';

@Injectable()
export class DepartmentsService {
  private _departments: BehaviorSubject<Array<IDepartment>> = new BehaviorSubject(new Array());
  private department: IDepartment;
  get departments() {
    return this._departments.asObservable();
  }
  constructor(private http: Http) { }
  getDepartments() {
    return this.getDepartmentsFromServer();
  }
  private getDepartmentsFromServer() {
    this.http.get('http://localhost:4147/api/ChiNhanh/GetAll').subscribe(res => {
      const departments = res.json();
      this._departments.next(departments);
    });
  }
  removeDepartment(id: number) {
    return this.http.delete('http://localhost:4147/api/ChiNhanh/Delete/' + id).subscribe(() => {
      const index = this._departments.getValue().findIndex(b => b.Id === id);
      this._departments.getValue().splice(index, 1);
      this._departments.next(this._departments.getValue());
    });
  }
  createDepartment(departAdd: IDepartment) {
    return this.http.post('http://localhost:4147/api/ChiNhanh/create', departAdd).subscribe(() => {
      this._departments.getValue().push(departAdd);
      const newDepart = this._departments.getValue();
      this._departments.next(newDepart);
    });
  }
  searchDepart(keyw: string) {

  }

}
