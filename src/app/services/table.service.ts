import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { Row } from '../shared/row';

@Injectable()
export class TableService {

  constructor(private http: Http) { }

  addRow(row: Row) {
    return this.http.post('/api/rows', row).map((response: Response) => response.json());
  }

  getRows() {
      return this.http.get('/api/rows').map((response: Response) => response.json());
  }

  deleteRow(id: number) {
    return this.http.delete('/api/rows/' + id).map((response: Response) => response.json());
}

}