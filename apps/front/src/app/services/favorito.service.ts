import { HttpClient } from '@angular/common/http';
import { Injectable, inject} from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { IFavorito } from '@nx-monorepo/comum';
import { API_BASE } from '@nx-monorepo/auth';

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
