import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-emp-form-field',
  templateUrl: './emp-form-field.component.html',
  styleUrls: ['./emp-form-field.component.scss']
})
export class EmpFormFieldComponent implements OnInit {
  @Input() empFormGrp: FormGroup;

  @Output() submitFn: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder, public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  getErrorMessage(form: FormGroup) {
    return form.get('email').hasError('required')
      ? 'Field is required'
      : form.get('email').hasError('email')
      ? 'Enter the valid email'
      : '';
  }

  submit(empFormGrp) {
    this.submitFn.emit(empFormGrp)
  }
  reset(empFormGrp) {
    empFormGrp.reset();
  }
  goBack(): void {
    this.router.navigate(['../list'], { relativeTo: this.route });
  }

}
