import { Component, OnInit } from '@angular/core';
import { Row } from '../shared/row';
import { TableService } from '../services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  rows: any = [];
  model: any = {};
  constructor(private tableservice: TableService) { }

  ngOnInit() {
    this.getRows();
  }

  getRows(): void {
    this.tableservice.getRows()
    .subscribe(data => {
      this.rows = data;
      console.log(data);
    });
  }

  add(): void {
    this.tableservice.addRow(this.model)
      .subscribe(data => console.log("Row added"),
      error => console.log(error));
    this.model = {};


  // delete(row: Row): void {
  //   this.rows = this.rows.filter(cv => cv !== row);
  //   this.tableservice.deleteRow(row).subscribe();
  // }


}
}
