import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {

  employe: any = {};

  constructor(private rutaActiva: ActivatedRoute) {}

  ngOnInit() {
    let id = this.rutaActiva.snapshot.paramMap.get('id');
  }

  

  
  
}
