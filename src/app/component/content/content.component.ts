import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  @Input() titulo: string= 'Título';
  @Input() conteudo: string='';
  @Input() imagem: string='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-BlktZD42nXme6ZspEhK7542dSWTgJmNinBxov5MxXw&s';

}
