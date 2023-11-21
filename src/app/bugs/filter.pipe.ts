import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(filterBugs: any, filterString: string, propName: string): any {
    if (filterBugs.length === 0) {
      return filterBugs;
    }
    const resultArr = [];
    for (const bug of filterBugs) {
      if (bug[propName] === filterString) {
        resultArr.push(bug);
      }
    }
    return resultArr;
  }
}
