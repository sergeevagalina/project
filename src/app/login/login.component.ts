import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any= {};
  loading = false;
  returnUrl: string;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationservice: AuthenticationService) { }

  ngOnInit() {
    this.authenticationservice.logout();

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.model.email = this.model.email.replace(/@/g, '%40');
    this.authenticationservice.login(this.model.email, this.model.password)
      .subscribe(
        data => this.router.navigate([this.returnUrl]),
        error => {
          alert('Error');
          this.loading = false;
        }
      );

  }



}
