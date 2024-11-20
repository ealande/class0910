import { HttpClient } from '@angular/common/http';
import { Injectable, inject} from '@angular/core';
import { API_BASE } from '../app.config';
import { Observable, shareReplay } from 'rxjs';
import { IFavorito } from '@nx-monorepo/comum';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {

  private httpClient = inject(HttpClient);
  private apiBase = inject(API_BASE);

  public  getAll(): Observable<IFavorito[]> {
    return this.httpClient.get<IFavorito[]>(
      `${this.apiBase}/favorito`,
    ).pipe(
      shareReplay()
    );
  }
}
