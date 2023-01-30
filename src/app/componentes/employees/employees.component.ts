import { Component, OnInit } from '@angular/core';
import { EmpleadosServiceService } from '../../services/empleados-service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {

  employees: any[] = [
    
    {
      id: 0,
      isActive: false,
      age: 39,
      name: {
        first: 'Patsy',
        last: 'Moore',
      },
      company: 'ZYTREX',
      email: 'patsy.moore@zytrex.net',
      favoriteFruit: 'strawberry',
    },
    {
      id: 1,
      isActive: true,
      age: 37,
      name: {
        first: 'Valencia',
        last: 'Flores',
      },
      company: 'AQUAMATE',
      email: 'valencia.flores@aquamate.us',
      favoriteFruit: 'banana',
    },
    {
      id: 2,
      isActive: false,
      age: 37,
      name: {
        first: 'Leona',
        last: 'Wyatt',
      },
      company: 'SENMAO',
      email: 'leona.wyatt@senmao.io',
      favoriteFruit: 'apple',
    },
  ];

  
    showEmployee(id: any){

      return this.employees[id];
     

    };
  

  constructor() {

    
  }

  ngOnInit(): void {}
}
