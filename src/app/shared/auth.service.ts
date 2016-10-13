import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  userName: string = null;

  login() {
    this.userName = 'User';
  }

  logout() {
    this.userName = null;
  }
}
