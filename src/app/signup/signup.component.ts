import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private userservice: UserService) { }

  ngOnInit() {
  }

  register() {
    this.loading = true;
    this.model.email = this.model.email.replace(/@/g, '%40');
    this.userservice.create(this.model)
      .subscribe(
        data => {
          alert('Registration successful');
          this.router.navigate(['/login']);
        },
        error => {
          alert('Error');
          this.loading = false;
        }
      );





  }

}
