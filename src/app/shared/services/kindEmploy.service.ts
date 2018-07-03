import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';
import { IKindEmploy } from './../../core/models/IKindEmploy';



@Injectable()
export class kindEmployService{
    private _kindEmploy: BehaviorSubject<Array<IKindEmploy>> = new BehaviorSubject(new Array());
    private kindEmploy: IKindEmploy;
    get kindEmploys() {
      return this._kindEmploy.asObservable();
    }
    constructor(private http: Http) { }
    getKindEmploys() {
      return this.getKindEmploysFromServer();
    }
    private getKindEmploysFromServer() {
      this.http.get('http://localhost:4147/api/loainhanvien/GetAll').subscribe(res => {
        const employs = res.json();
        this._kindEmploy.next(employs);
      });
    }
}