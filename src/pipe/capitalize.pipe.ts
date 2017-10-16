import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalize'})
export class CapitalizePipe implements PipeTransform {
    transform(value: string): string {
        let message = "Welcome to " + value;
        return message;
      }
}