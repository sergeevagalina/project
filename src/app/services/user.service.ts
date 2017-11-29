import { Injectable } from '@angular/core';
import { User } from '../shared/user';

@Injectable()
export class UserService {

  constructor() { }

  saveUser(user: User) {
    let serialUser = JSON.stringify(user);
    localStorage.setItem('user', serialUser);
    console.log('User saved!');
  }

  getUser(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }
}
