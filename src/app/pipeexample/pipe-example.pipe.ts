import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeExample'
})
export class PipeExamplePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]){
    return value.split('').reverse().join('');
  }

}


@Pipe({
  name: "Addpipe"
})
export class AdditionPipe implements PipeTransform {
  transform(num1: number, num2: number) {
    return num1 + num2;
  }

}
