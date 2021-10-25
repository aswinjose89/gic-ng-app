import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEmployee from '../reducers';

import { EmpState, EmployeeStateInterface } from '../states';

export const selectEmployeeState = createFeatureSelector<EmpState>(
  fromEmployee.employeeFeatureKey
);

/* Masksets */
export const getEmployeeSelector = createSelector(
    selectEmployeeState,
    (state: EmpState) => state.EmployeeState
);

export const loadEmployeeSelector = createSelector(
  getEmployeeSelector,
    (state: EmployeeStateInterface) =>  {state.results; return state}
);

export const getEmployeeError = createSelector(
  getEmployeeSelector,
  (state: EmployeeStateInterface) => state.error
);

export const isEmployeeLoading = createSelector(
  getEmployeeSelector,
  (state: EmployeeStateInterface) => state.isLoading
);

export const isEmployeeLoaded = createSelector(
  getEmployeeSelector,
  (state: EmployeeStateInterface) => state.isLoaded
);
