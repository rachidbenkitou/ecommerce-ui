import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceLineBreaks'
})
export class ReplaceLineBreaksPipe implements PipeTransform {

  transform(value: string): string {
    if(value !== null){
      return value.replace(/\n/g, '<br/>');
    }
    return '';
 }
}



