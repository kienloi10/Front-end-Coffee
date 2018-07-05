import { IDepartment } from './../../core/models/IDepartment';
import { IEmployee } from './../../core/models/IEmployee';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'departmentPipe'
})

export class DepartmentPipe implements PipeTransform {
    transform(departs: IDepartment[], id:Number): any {
        return departs.find(x=>x.Id == id).TenChiNhanh;
    }
}
