import { Injectable, EventEmitter } from '@angular/core';
import { IUser, Role } from '../models/user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {
  user: IUser | undefined;
  USER_DATA: IUser[] = [{
    userName: 'PROFE',
    password: 'Prueba123',
    name: 'davis alexander',
    role: Role.admin},
  {
    userName: 'estudiante',
    password: 'Prueba123',
    name: 'vargas bautista',
    role: Role.user}
  ];
    constructor() {
      this.loadUser();
    }
  onChange: EventEmitter <IUser | undefined> = new EventEmitter <IUser | undefined>();
  authenticate(usr: string, psw: string): Observable<IUser> {
    const ans = this.USER_DATA.find(U => U.userName === usr && U.password === psw);
    if (ans) {
      localStorage.setItem('user', JSON.stringify(ans));
      this.user = {...ans};
    }
    return of (ans);

  }
  logOut () {
    this.clearUser();
  }
  clearUser() {
    this.user = undefined;
    this.onChange.emit(this.user);
  }
  eraseUser() {
    localStorage.removeItem('user');
  }
  getCurrentUser(): IUser | undefined {
    return this.user;
  }
  isAuthenticated (): boolean {
    return this.user ? true : false;
  }
  loadUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  }
}
