import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { User } from '../shared/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = new User;
  savedUser = null;

  constructor(private userservice: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.user.email = this.user.email.replace(/@/g, '%40');
    this.user.id = 1;
    this.userservice.saveUser(this.user);
    this.savedUser = this.userservice.getUser('user');
    console.log('User from localeStorage:');
    console.log(this.savedUser);
    console.log(this.savedUser.id);
    // localStorage.clear();
  }

}
