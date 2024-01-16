import { Component } from '@angular/core';
import { ContentComponent } from "../../component/content/content.component";
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
    selector: 'app-conteudo',
    standalone: true,
    templateUrl: './conteudo.component.html',
    styleUrl: './conteudo.component.css',
    imports: [ContentComponent]
})
export class ConteudoComponent {
  conteudo:string='';
  titulo:string='';
  img:string='';

  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit():void{
    this.route.paramMap.subscribe(value=>{
      const id: number = value.has('id') ? +value.get('id')! : 0;
      const index = Math.min(Math.max(id, 0), dataFake.length - 1);
      this.conteudo = dataFake[index]['conteudo'];
      this.titulo = dataFake[index]['titulo'];
      this.img = dataFake[index]['img'];
    })
  }
}
