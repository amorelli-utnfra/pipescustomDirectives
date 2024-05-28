import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], search: string) {
    if (search !== "" ) {
 
      return value.filter(v => v.name.first === search);
    }
    return value;
  }

}
