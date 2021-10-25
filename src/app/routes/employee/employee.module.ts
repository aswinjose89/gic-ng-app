import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import * as fromEmployee from './store';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from './store/effects/employee.effects'

import { SharedModule } from '@shared/shared.module';

import { EmployeeRoutingModule } from './employee-routing.module';
import { ListEmpComponent, AddEmpComponent, AgCellBtnComponent, EditEmpComponent, EmpFormFieldComponent, EmployeeService, EmpApiService } from './';
import { DeleteEmployeeComponent } from './popups';


const MODULES = [
  CommonModule,
  EmployeeRoutingModule,
  SharedModule,
  StoreModule.forFeature(fromEmployee.employeeFeatureKey, fromEmployee.empReducers),
  EffectsModule.forFeature([EmployeeEffects])
];
const COMPONENTS= [ListEmpComponent, AddEmpComponent, AgCellBtnComponent, EditEmpComponent, EmpFormFieldComponent ];
const POPUP= [ DeleteEmployeeComponent ];

@NgModule({
  declarations: [ ...COMPONENTS, ...POPUP ],
  imports: [...MODULES],
  entryComponents: [...POPUP],
  providers: [EmployeeService, EmpApiService]
})
export class EmployeeModule { }
