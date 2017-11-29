import { Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { UserprofileComponent } from '../userprofile/userprofile.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: UserprofileComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
];