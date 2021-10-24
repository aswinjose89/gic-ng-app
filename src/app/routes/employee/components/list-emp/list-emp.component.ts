import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { ApiService } from '../../../../core/services';
import { AgCellBtnComponent } from '../ag-cell-btn/ag-cell-btn.component';
import { DeleteEmployeeComponent } from '../../popups';
import { employeeConfig } from '../../configs';

@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.scss']
})
export class ListEmpComponent implements OnInit {
  private input;
  public rowData;
  public frameworkComponents: any;
  public columnDefs: any[];
  public defaultColDef: any;

  constructor(private api:  ApiService, public router: Router, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.gridConfigBinder();
    this.getLatestEmployees();
  }

  gridConfigBinder(){
    this.columnDefs = [
      ...employeeConfig['empColDefs'],
      {
        headerName: 'Action',
        cellRenderer: 'buttonRenderer',
        cellRendererParams: {
          onClick: this.actionBtn.bind(this),
          label: 'Edit'
        },
        minWidth: 300,
      }
    ];
    this.defaultColDef = employeeConfig['empColConfig'];

    this.frameworkComponents = {
      buttonRenderer: AgCellBtnComponent,
    }
  }

  onGridReady(params) {
  }

  getLatestEmployees(){
    let rowData= JSON.parse(localStorage.getItem("rowData"));
    if(rowData && rowData.length>0){
      this.rowData= rowData;
    }
    else{
      this.getEmployees();
    }
  }

  getEmployees(){
    this.input = {};
      this.api.getRemoteApi("https://6164f6e709a29d0017c88ed9.mockapi.io/fetest/employees", this.input).subscribe((data)=>{
        this.rowData= data;
        localStorage.setItem("rowData", JSON.stringify(data));
      },
      (error)=>{
            this.api.errorResponse(error);
      });
  }

  actionBtn(e) {
    if(e.action === 'EDIT'){
      this.router.navigateByUrl('/employee/edit', { state: e.rowData });
    }
    else{
      this.openDialog(e.rowData);
    }
  }
  addEmployee(){
    this.router.navigateByUrl('/employee/add');
  }

  refresh(){
    this.getEmployees();
  }

  openDialog(row): void {
    const dialogRef = this.dialog.open(DeleteEmployeeComponent, {
      width: '250px',
      data: {modalTitle: 'Warning', row: row, message:"Are you sure you want to delete?"}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result && result['data']){
        let rowData= JSON.parse(localStorage.getItem("rowData"));
        let filteredData= rowData.filter(x=>x['id']!=result['data']['row']['id']);
        if(filteredData.length>0){
          this.rowData= filteredData;
          localStorage.setItem("rowData", JSON.stringify(filteredData));
        }
      }
      console.log('The dialog was closed');
    });
  }
}
