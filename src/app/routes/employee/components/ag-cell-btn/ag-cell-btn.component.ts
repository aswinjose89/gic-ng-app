import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-ag-cell-btn',
  templateUrl: './ag-cell-btn.component.html',
  styleUrls: ['./ag-cell-btn.component.scss']
})
export class AgCellBtnComponent implements ICellRendererAngularComp {
  params;
  label: string;

  constructor() { }

  agInit(params): void {
    this.params = params;
    this.label = this.params.label || null;
  }

  refresh(params?: any): boolean {
    return true;
  }

  onClick($event, action) {
    if (this.params.onClick instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data,
        action: action
      }
      this.params.onClick(params);

    }
  }

}
