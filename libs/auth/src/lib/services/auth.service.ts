import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { API_BASE } from '../auth/auth.module';
import { IUsuarioESenha, iUsuarioLogado } from '@nx-monorepo/comum';
import { Observable, ReplaySubject, map, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private router = inject(Router);
  private httpClient = inject(HttpClient);
  private apiBase = inject(API_BASE);

  private _jwt$ = new ReplaySubject(1);
  public jwt$ =  this._jwt$.asObservable();

  public logado$ = this._jwt$.pipe(
    map(jwt => jwt ? true : false)
  );

  constructor(){
    this._jwt$.next(this.jwt || undefined)
  };

  public get jwt(): string | null {
    return window.localStorage.getItem('jwt');
  };

  public login(usuario: IUsuarioESenha): Observable<iUsuarioLogado>{
    return this.httpClient.post<iUsuarioLogado>(
      `${this.apiBase}/auth/login`,
      usuario,
    ).pipe(
      tap(usuarioLogado => {
        window.localStorage.setItem('jwt', usuarioLogado.jwt)
        this._jwt$.next(usuarioLogado.jwt)
      }),
    );

  }

  public logout(): void {
    window.localStorage.removeItem('jwt');
    this._jwt$.next(undefined);
    this.router.navigate([ '/auth' ]);

  }
};
