import { ActionReducerMap } from '@ngrx/store';

import * as fromEmployeeReducer from './employee.reducer';
import { EmpState } from '../states';
// import { awStoreFeatureKey } from './../../constants';

export const empReducers: ActionReducerMap<EmpState> = {
    EmployeeState: fromEmployeeReducer.EmployeesReducer,
};

// export const awFeatureKey = awStoreFeatureKey;
export const employeeFeatureKey = 'employee';
