import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { API_BASE } from '../auth/auth.module';
import { IUsuarioESenha, iUsuarioLogado } from '@nx-monorepo/comum';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpClient = inject(HttpClient);
  private apiBase = inject(API_BASE);

  public login(usuario: IUsuarioESenha): Observable<iUsuarioLogado>{
    return this.httpClient.post<iUsuarioLogado>(
      `${this.apiBase}/auth/login`,
      usuario,
    )

  }
}
