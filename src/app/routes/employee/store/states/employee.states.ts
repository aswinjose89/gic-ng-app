interface BaseInterface{
    error,
    isLoading: boolean
    isLoaded: boolean
  }

  export interface EmployeeStateInterface extends BaseInterface {
    results,
  }

  export let EmployeesState: EmployeeStateInterface = {
      results: [],
      error: {},
      isLoading: false,
      isLoaded: false
  }
