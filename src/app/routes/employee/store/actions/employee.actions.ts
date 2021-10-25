import { createAction, props } from '@ngrx/store';

export const empEmployees = createAction(
  '[Employee] Emp Employees'
);

export const empEmployeesSuccess = createAction(
  '[Employee] Emp Employees Success',
  props<{ data: any }>()
);

export const empEmployeesFailure = createAction(
  '[Employee] Emp Employees Failure',
  props<{ error: any }>()
);
