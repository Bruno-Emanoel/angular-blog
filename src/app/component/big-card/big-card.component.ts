import { Component, Input } from '@angular/core';
@Component({
  selector: 'big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  @Input() titulo:string = 'Página mais relevante'
  @Input() imgLink:string= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-BlktZD42nXme6ZspEhK7542dSWTgJmNinBxov5MxXw&s'
  @Input() texto:string = 'Texto não informado'
  @Input() id:number = 0;

}
