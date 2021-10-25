import { Action, createReducer, on } from '@ngrx/store';
import * as EmployeeActions from '../actions/employee.actions';
import * as fromEmployeeState from '../states';



const employeeReducer = createReducer(
  fromEmployeeState.EmployeesState,
  on(EmployeeActions.empEmployees, state => {
            return { ...state, isLoading: true };
        }
),
  on(EmployeeActions.empEmployeesSuccess, (state, { data }) => {
            state.isLoading = false;
            state.isLoaded = true;
            state.results = [data[0]];
            return { ...state };
  }),
  on(EmployeeActions.empEmployeesFailure, (state, { error }) => {
  state.isLoading = false;
    state.isLoaded = false;
    state.error = error;
  return { ...state }
  }),

);


export function EmployeesReducer(state: fromEmployeeState.EmployeeStateInterface, action: Action) {
    return employeeReducer(state, action);
}
