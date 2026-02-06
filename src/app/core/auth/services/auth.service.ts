import { AuthResponse } from './../types/AuthResponse.interface';
import { map, Observable } from "rxjs";
import { LoginRequest } from "../types/LoginRequest.interface";
import { CurrentUser } from "../../../shared/types/CurrentUser.interface";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequest } from '../types/RegisterRequest.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(data: LoginRequest): Observable<CurrentUser> {
    // TODO: Poner URL en env
    const url = 'https://localhost:7050' + '/login';
    return this.http.post<AuthResponse>(url, data).pipe(
      map((response: AuthResponse) => ({
        username: response.username,
        email: response.email,
        token: response.token
      }))
    );
  }

  register(data: RegisterRequest): Observable<CurrentUser> {
    const url = 'https://localhost:7050/' + 'auth/register';
    return this.http.post<AuthResponse>(url, data).pipe(
      map((response: AuthResponse) => ({
        username: response.username,
        email: response.email,
        token: response.token
      }))
    );
  }

  isUserAuthenticated(): boolean {
    return true;
  }
}
