import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Video } from '../../models/videos.model';
@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css',
})
export class VideosComponent {
  videoTeste: Video = {
    id: 1,
    name: "testeNome",
    url: "http://www.youtube.com.br",
    description: "teste descri"
  }
}
