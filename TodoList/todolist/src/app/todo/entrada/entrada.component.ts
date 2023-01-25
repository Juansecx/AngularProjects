import { Component, OnInit } from '@angular/core';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css'],
})
export class EntradaComponent implements OnInit {

  private _tarea: string = '';

  private _puntos: any;
  
  constructor(private servicioTareas: TareasService) {}

  ngOnInit(): void {}

  addTarea(): void {

    if (this._tarea !== '' && this._puntos>0) {
      this.servicioTareas.tareas.push(this._tarea);
      this.servicioTareas.tareas.push(this._puntos);
      this._tarea = '';
    }
  }
  set tarea(tarea: string) {
    this._tarea = tarea;
  }
  get tarea(): string {
    return this._tarea;
  }

  set punto(punto: any) {
    this._puntos = punto;
  }
  get punto(): string {
    return this._puntos;
  }
}
