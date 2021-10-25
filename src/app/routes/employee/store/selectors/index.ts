import { createFeatureSelector } from '@ngrx/store';
import * as fromEmployee from '../reducers';

import { EmpState } from '../states';

// selectors
export const selectEmpState= createFeatureSelector<EmpState>(fromEmployee.employeeFeatureKey);

export * from './employee.selectors';
