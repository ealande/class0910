import { Component, Input, OnInit, inject } from '@angular/core';
import { IFavorito } from '@nx-monorepo/comum';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { FavoritoEdicaoService } from '../../../favorito-edicao/services/favorito-edicao.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-favorito',
  templateUrl: './form-favorito.component.html',
  styleUrl: './form-favorito.component.css',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class FormFavoritoComponent  implements OnInit {

  @Input(
    {required: true},
  )
  public get id():string {
    return `${this.formGroup.controls['_id'] || ''}`
  };

  public set id(value: string) {
    this.formGroup.controls['_id'].setValue(+(value || '0'));
  }

  private fb = inject(FormBuilder);

  private router = inject(Router);

  private favoritoEdicaoService = inject(FavoritoEdicaoService);

  formGroup = this.fb.group({
    _id: [0],
    titulo: ['', Validators.required],
    descricao: ['', Validators.required],
    imagem: ['', Validators.required],
    url: ['', Validators.required],
  });
  ;

  onSubmit(): void {
    const iFavorito = <IFavorito>this.formGroup.value;

    if(this.id) {
      this.favoritoEdicaoService.put(iFavorito).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.favoritoEdicaoService.post(iFavorito).subscribe(()=> {
        this.router.navigate(['/'])

      });
    }
  }

   public ngOnInit(): void {
   if(this.id){
    this.favoritoEdicaoService.get(+this.id).subscribe(iFavorito => {
      this.formGroup.setValue(iFavorito);
    }) ;
   }
  }
}
