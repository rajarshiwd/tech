import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'reverse'})
export class ReversestringKeysPipe implements PipeTransform {
    

  transform(str:string):any{
   return str.split("").reverse().join("");
  }

 
}