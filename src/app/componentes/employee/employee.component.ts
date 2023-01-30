import { Component } from '@angular/core';
import { EmployeesComponent } from '../employees/employees.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employe: any = {}; 

  constructor( private empleado: EmployeesComponent){

    //Que la variable creada sea iual que la que viene del componente Employees

    this.empleado=empleado;


  };

  

 

}
