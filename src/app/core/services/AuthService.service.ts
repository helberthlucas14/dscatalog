import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable,
  BehaviorSubject,
  catchError,
  tap,
  map,
  distinctUntilChanged,
  finalize,
} from 'rxjs';
import { environment } from '../../../environments/environment';

export interface LoginData {
  username: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  userFirstName: string;
  userId: number;
}

export interface AccessToken {
  exp: number;
  user_name: string;
  authorities: string[];
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly dataName = 'authData';
  private readonly clientId = environment.CLIENT_ID || 'dscatalog';
  private readonly clientSecret = environment.CLIENT_SECRET || 'dscatalog123';
  private readonly baseUrl = environment.BASE_URL || 'http://localhost:8080';

  // Estado reativo do usuário
  private userSubject = new BehaviorSubject<LoginResponse | null>(
    this.getSessionData()
  );
  public user$ = this.userSubject.asObservable().pipe(distinctUntilChanged());

  constructor(private readonly http: HttpClient) {}

  /** Salva os dados da sessão e emite a mudança */
  public saveSessionData(loginResponse: LoginResponse): void {
    localStorage.setItem(this.dataName, JSON.stringify(loginResponse));
    this.userSubject.next(loginResponse); // Atualiza estado
  }

  /** Recupera os dados da sessão */
  public getSessionData(): LoginResponse | null {
    const sessionData = localStorage.getItem(this.dataName);
    return sessionData ? JSON.parse(sessionData) : null;
  }

  /** Decodifica o token JWT */
  public getAccessTokenDecoded(): AccessToken | null {
    const sessionData = this.getSessionData();
    if (!sessionData) return null;

    try {
      const tokenParts = sessionData.access_token.split('.');
      return JSON.parse(atob(tokenParts[1])) as AccessToken;
    } catch {
      return null;
    }
  }

  /** Verifica se o token é válido */
  public isTokenValid(): boolean {
    const decodedToken = this.getAccessTokenDecoded();
    return decodedToken ? Date.now() <= decodedToken.exp * 1000 : false;
  }

  /** Verifica se o usuário está autenticado */
  public isAuthenticated(): boolean {
    return !!this.getSessionData()?.access_token && this.isTokenValid();
  }

  /** Verifica se o usuário tem permissão para acessar uma rota */
  public isAllowedByRole(routeRoles: string[] = []): boolean {
    if (routeRoles.length === 0) return true;

    const decodedToken = this.getAccessTokenDecoded();
    return decodedToken
      ? routeRoles.some((role) => decodedToken.authorities.includes(role))
      : false;
  }

  /** Retorna o nome do usuário logado */
  public getUserName(): string | null {
    return this.userSubject.value?.userFirstName ?? null;
  }

  /** Realiza login e salva a sessão */
  public login(loginData: LoginData): Observable<LoginResponse> {
    const token = `${this.clientId}:${this.clientSecret}`;
    const headers = new HttpHeaders({
      Authorization: `Basic ${btoa(token)}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const payload = new URLSearchParams({
      ...loginData,
      grant_type: 'password',
    });

    return this.http
      .post<LoginResponse>(`${this.baseUrl}/oauth/token`, payload.toString(), {
        headers,
      })
      .pipe(
        tap((response) => this.saveSessionData(response)), // Atualiza estado após login
        finalize(() => console.log('Login finalizado')), // Mensagem de finalização
        catchError((error) => {
          console.error('Erro no login:', error);
          throw error;
        })
      );
  }

  /** Realiza logout e opcionalmente redireciona */
  public logout(redirect: boolean = true): void {
    localStorage.removeItem(this.dataName);
    this.userSubject.next(null); // Atualiza estado do usuário
    if (redirect) {
      window.location.href = '/auth/login';
    }
  }
}
