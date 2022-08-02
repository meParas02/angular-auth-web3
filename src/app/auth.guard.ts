import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public authService: AuthService, private router: Router) {}

  canActivate() {
    var cread: any = this.authService.user.value;
    if (cread.authName === 'admin' && cread.password === 'admin123') {
      return true;
    }
    this.router.navigate(['/login']);
    alert('Please, Login with correct credentials!');
    return false;
  }
}
