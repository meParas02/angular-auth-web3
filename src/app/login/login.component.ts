import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  authName: any;
  password: any;
  user = {
    authName: '',
    password: '',
  };
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  setName = (e: any) => {
    this.user.authName = e.target.value;
  };

  setPass = (e: any) => {
    this.user.password = e.target.value;
  };

  submit = () => {
    this.authService.login(this.user);
    this.router.navigate(['/dashboard']);
  };
}