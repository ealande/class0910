import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { FavoritoService } from '../../services/favorito.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { HighUtfprDirectiveDirective } from '../../directives/highUtfprDirective.directive';
import { SplitTextPipe } from '../../pipes/splitText.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule, RouterModule, HighUtfprDirectiveDirective, SplitTextPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private favoritoService = inject(FavoritoService);

  public favoritos$ = this.favoritoService.getAll();


}
