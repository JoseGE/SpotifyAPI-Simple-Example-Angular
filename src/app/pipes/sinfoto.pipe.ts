import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(value: any[], position?): any {
    const i = (position) ? position : 1;
    const pathNoimage = 'assets/img/noimage.png';
    if (!value) {
      return pathNoimage;
    }
    return (value.length > 0) ? value[i].url : pathNoimage;
  }

}
