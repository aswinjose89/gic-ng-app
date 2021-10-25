export * from './employee.states';

import * as fromEmployeeState from './employee.states';

interface EmployeeState {
  EmployeeState: fromEmployeeState.EmployeeStateInterface;
}

export interface EmpState extends EmployeeState {}
