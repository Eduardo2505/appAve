import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'fechalarga'})
export class FechaLarga implements PipeTransform {
    transform(value: string): string {

        var fecha = new Date(value);
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


        let message =  fecha.toLocaleDateString("es-ES", options)
        return this.MaysPrimera(message);
      }
       MaysPrimera(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
}