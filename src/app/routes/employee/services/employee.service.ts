import { Injectable } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private fb: FormBuilder) { }

  empForm(){
    return this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      lastName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      id: ['', []]
    });
  }
}
