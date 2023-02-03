import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EmpleadosServiceService } from '../../empleados-service.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {

  employe: any = {};

  constructor(private rutaActiva: ActivatedRoute, private empleados: EmpleadosServiceService) {}

  ngOnInit() {
    let id = this.rutaActiva.snapshot.paramMap.get('id');
    this.employe = this.empleados.employees.filter(empleados => empleados.id==id);
  }

  

  
  
}
