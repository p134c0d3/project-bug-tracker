import { PipeTransform } from "@angular/core";

export class FilterPipe implements PipeTransform {
  transform(value: any) {
    return value.sort()
  }
}
