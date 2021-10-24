import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';

import { EmployeeRoutingModule } from './employee-routing.module';
import { ListEmpComponent, AddEmpComponent, AgCellBtnComponent, EditEmpComponent, EmpFormFieldComponent, EmployeeService } from './';
import { DeleteEmployeeComponent } from './popups';

const MODULES = [
  CommonModule,
  EmployeeRoutingModule,
  SharedModule
];
const COMPONENTS= [ListEmpComponent, AddEmpComponent, AgCellBtnComponent, EditEmpComponent, EmpFormFieldComponent ];
const POPUP= [ DeleteEmployeeComponent ];

@NgModule({
  declarations: [ ...COMPONENTS, ...POPUP ],
  imports: [...MODULES],
  entryComponents: [...POPUP],
  providers: [EmployeeService]
})
export class EmployeeModule { }
