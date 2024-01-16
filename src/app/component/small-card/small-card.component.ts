import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'small-card',
  standalone: true,
  imports: [CommonModule,RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})

export class SmallCardComponent {

  @Input() template:PaginaStandart= {
    personalId:0,
    imgLink:'',
    titulo:''
  }

}

interface PaginaTemplate {
  personalId: number;
  imgLink: string;
  titulo: string;
}

export class PaginaStandart implements PaginaTemplate {
  personalId: number;
  imgLink: string;
  titulo: string;

  constructor(personalId:number, imgLink:string, titulo:string) {
    this.personalId = personalId;
    this.imgLink = imgLink || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-BlktZD42nXme6ZspEhK7542dSWTgJmNinBxov5MxXw&s';
    this.titulo = titulo || 'Página recente';
  }
}
