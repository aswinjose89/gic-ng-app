import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { EmployeeService } from '../../services';
import { employee } from '../../models';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.scss']
})
export class EditEmpComponent implements OnInit {
  editEmpForm: FormGroup;
  state$: Observable<object>;

  constructor(private toastr: ToastrService, public activatedRoute: ActivatedRoute, private fb: FormBuilder, private empSvc:EmployeeService) {
    this.editEmpForm = this.empSvc.empForm();
  }

  ngOnInit(): void {
    this.state$ = this.activatedRoute.paramMap
    .pipe(map(() => window.history.state))
    this.state$.subscribe((data: employee) =>{
      let patchVal: employee={
        firstName: data['firstName'],
        lastName: data['lastName'],
        email: data['email'],
        number: data['number'],
        gender: data['gender'],
        id: data['id']
      };
      this.editEmpForm.patchValue(patchVal);
    })
  }

  submit($event) {
    if (this.editEmpForm.valid) {
      let rowData= JSON.parse(localStorage.getItem("rowData"));
      let rowIndex= rowData.findIndex(x=>x['id']==this.editEmpForm.get('id').value);
      if(rowIndex!==-1){
        rowData[rowIndex]['firstName']= this.editEmpForm.get('firstName').value;
        rowData[rowIndex]['lastName']= this.editEmpForm.get('lastName').value;
        rowData[rowIndex]['email']= this.editEmpForm.get('email').value;
        rowData[rowIndex]['number']= this.editEmpForm.get('number').value;
        rowData[rowIndex]['gender']= this.editEmpForm.get('gender').value;
        localStorage.setItem("rowData", JSON.stringify(rowData));
        this.showToast("Updated Employee Details Successfully.");
      }
    }
  }
  showToast(obj: any) {
    this.toastr.success(JSON.stringify(obj));
  }

}
