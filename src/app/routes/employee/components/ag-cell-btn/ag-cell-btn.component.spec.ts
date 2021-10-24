import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgCellBtnComponent } from './ag-cell-btn.component';

describe('AgCellBtnComponent', () => {
  let component: AgCellBtnComponent;
  let fixture: ComponentFixture<AgCellBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgCellBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgCellBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
