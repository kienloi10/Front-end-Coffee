import { IEmployee } from './../../core/models/IEmployee';
import { IKindEmploy } from './../../core/models/IKindEmploy';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'positionPipe'
})

export class PositionPipe implements PipeTransform {
    transform(kinds: IKindEmploy[], id:Number): any {
        return kinds.find(x=>x.Id == id).TenLoai;
    }
}
