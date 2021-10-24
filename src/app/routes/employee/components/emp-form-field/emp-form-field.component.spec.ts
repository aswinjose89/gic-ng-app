import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpFormFieldComponent } from './emp-form-field.component';

describe('EmpFormFieldComponent', () => {
  let component: EmpFormFieldComponent;
  let fixture: ComponentFixture<EmpFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpFormFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
