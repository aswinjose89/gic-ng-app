import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as EmployeeActions from '../actions/employee.actions';
// import { AwApiService } from '../../api';
import { EmpApiService } from '../../services';


@Injectable()
export class EmployeeEffects {

constructor(private actions$: Actions, private empApiSvc: EmpApiService) {}

loadEmployeeAttrs$ = createEffect(() => this.actions$.pipe(
            ofType(EmployeeActions.empEmployees),
            mergeMap(
                (payload: any) => this.empApiSvc.getEmployees(payload.data)
                .pipe(
                    map(data => EmployeeActions.empEmployeesSuccess({ data })),
                    catchError(error => of(EmployeeActions.empEmployeesFailure({ error })))
                )
            )
        )
    );
}
