import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-date',
  templateUrl: './pipe-date.component.html',
  styleUrls: ['./pipe-date.component.css'],
})
export class PipeDateComponent {

  fecha1 = new Date(1988, 3, 15); //15 de Abril del 1988
  idFormatoFecha = true; // true == shortDate ; false == fullDateç
  
  get formatoFecha() {
    return this.idFormatoFecha ? 'shortDate' : 'fullDate';
  }
  cambiarFormatoFecha() {
    this.idFormatoFecha = !this.idFormatoFecha;
  }

  fecha: Date = new Date(1988, 3, 15, 12, 30, 15);







}
