import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpComponent, ListEmpComponent,EditEmpComponent } from './'

const routes: Routes = [
  { path: 'list', component: ListEmpComponent, data: { title: 'Employees List' } },
  { path: 'add', component: AddEmpComponent, data: { title: 'Add Employee' } },
  { path: 'edit', component: EditEmpComponent, data: { title: 'Edit Employee' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
