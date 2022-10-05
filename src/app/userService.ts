import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, Observable } from 'rxjs';

import { user } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
    private url = 'https://jsonplaceholder.typicode.com/users';
    private user$ = new BehaviorSubject<any>({});
    selectedUser$ = this.user$.asObservable();

    constructor(private httpClient: HttpClient) { }

    
    getUsers() {
        return this.httpClient.get(this.url);
    }
    setUser(user: any) {
        this.user$.next(user);
      }

    }
