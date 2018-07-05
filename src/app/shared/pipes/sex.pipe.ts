import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sexPipe'
})

export class SexPipe implements PipeTransform {
    transform(sex: boolean): string {
        return sex ? 'Male' : 'Female';
    }
}
