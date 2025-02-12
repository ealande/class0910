import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '@nx-monorepo/auth';
import { SplitTextPipe } from '../../pipes/splitText.pipe';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    SplitTextPipe,
  ]
})
export class LayoutComponent {
  private breakpointObserver = inject(BreakpointObserver);

  public authService = inject(AuthService);

  isXSmall$: Observable<boolean> = this.breakpointObserver.observe(
    Breakpoints.XSmall,
  ).pipe(
    map(result => result.matches),
    shareReplay(),
  );
  }
