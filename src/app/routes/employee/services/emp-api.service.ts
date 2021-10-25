import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services';

@Injectable({
  providedIn: 'root'
})
export class EmpApiService {
  private empListUrl = "https://6164f6e709a29d0017c88ed9.mockapi.io/fetest/employees"

  constructor(public apiService:ApiService) { }

  getEmployees(inputParams){
    return this.apiService.getRemoteApi(this.empListUrl, inputParams);
  }
}
