import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone: any): string {

    if (phone == null ||phone === "" ) {
      return '';
    }
    const length = phone.length - 1
    const str1 = phone.slice(length -1);
    const str2 = phone.slice(length -3,length -1);
    const str3 = phone.slice(length -5,length -3);
    const str4 = phone.slice(length -8,length -5);
    const code = phone.slice(0,length -8);
    phone = "+"+code+" "+str4+" "+str3+" "+str2+" "+str1

    return `${phone}`;

  }

}
