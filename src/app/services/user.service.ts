import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import { User } from '../shared/user';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getById(id: number) {
    return this.http.get('/api/users').map((response: Response) => response.json());
  }

  create(user: User) {
    return this.http.post('/api/users', user).map((response: Response) => response.json());
  }
}
