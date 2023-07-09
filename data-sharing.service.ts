import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  [x: string]: any;
  isLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isSuperUser: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  user: BehaviorSubject<any> = new BehaviorSubject<any>(null); 
  constructor() { }

  setSuperUser(isSuperUser: boolean) {
    this.isSuperUser.next(isSuperUser);
  }
  setUser(user: any) {
    this.user.next(user);
  }

}
