import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject(null);

  constructor(private router: Router) {}

  login(data: any) {
    this.user.next(data);
  }

  logout() {
    this.router.navigate(['/login']);
    this.user.next(null);
  }
}
