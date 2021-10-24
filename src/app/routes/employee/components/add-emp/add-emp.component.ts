import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

import { EmployeeService } from '../../services';
import { employee } from '../../models';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.scss']
})
export class AddEmpComponent implements OnInit {
  addEmpForm: FormGroup;

  constructor(private toastr: ToastrService, private fb: FormBuilder, private empSvc:EmployeeService, private router: Router) {
    this.addEmpForm = this.empSvc.empForm();
    let patchVal= {
      gender: 'male'
    };
    this.addEmpForm.patchValue(patchVal);
    // this.router.events.subscribe((event: Event) => {
    //     if (event instanceof NavigationStart) {
    //         if(this.addEmpForm.dirty){
    //           var answer = confirm("Form has been modified. You will lose your unsaved changes.Are you sure you want to close this form?");
    //           if (!answer) {
    //             this.router.navigate(['/employee/add']);
    //           }
    //         }
    //     }
    // });

  }

  ngOnInit(): void {
  }

  submit($event) {
    if (this.addEmpForm.valid) {
      let rowData= JSON.parse(localStorage.getItem("rowData"));
      let data: employee={
        firstName: this.addEmpForm.get("firstName").value,
        lastName: this.addEmpForm.get("lastName").value,
        email: this.addEmpForm.get("email").value,
        number: this.addEmpForm.get("number").value,
        gender: this.addEmpForm.get("gender").value,
        id: (rowData.length +1)
      };
      rowData.push(data);
      localStorage.setItem("rowData", JSON.stringify(rowData));
      this.showToast("Saved Employee Details Successfully.");
    }
  }
  showToast(obj: any) {
    this.toastr.success(JSON.stringify(obj));
  }

  ngOnDestroy(): void {
    this.addEmpForm.dirty

  }

}
