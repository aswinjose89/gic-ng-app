import * as fromEmployee from '../reducers';
import { selectEmployeeState } from './employee.selectors';

describe('Employee Selectors', () => {
  it('should select the feature state', () => {
    const result = selectEmployeeState({
      [fromEmployee.employeeFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
