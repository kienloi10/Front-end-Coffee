import { IDepartment } from './../../core/models/IDepartment';

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';

@Injectable()
export class DepartmentsService {
  private _departments: BehaviorSubject<Array<IDepartment>> = new BehaviorSubject(new Array());
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

//   searchBook (keyword: string) {
//     const departments = this.getDepartmentsFromServer().filter(p => p.title.toLowerCase().includes(keyword.toLowerCase()));
//     this._departments.next(departments);
//   }
}

