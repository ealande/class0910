import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';


@Component({
  standalone: true,
  imports: [
    RouterModule,
    LayoutComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'front';
}
