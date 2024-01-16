import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from "../../component/page-title/page-title.component";
import { PaginaStandart, SmallCardComponent } from "../../component/small-card/small-card.component";
import { BigCardComponent } from "../../component/big-card/big-card.component";
import { ContentBarComponent } from "../../component/content-bar/content-bar.component";
import { HeaderBarComponent } from "../../component/header-bar/header-bar.component";
import { FooterCardComponent } from "../../component/footer-card/footer-card.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DataInterface, dataFake } from '../../data/dataFake';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule,RouterOutlet, RouterLink, RouterLinkActive, PageTitleComponent, SmallCardComponent, BigCardComponent, ContentBarComponent, HeaderBarComponent, FooterCardComponent]
})
export class HomeComponent {
  idNumbers:number=dataFake.length-1;
  dataFake = dataFake;
  tituloPrincipal:string=dataFake[this.idNumbers]['titulo'];
  imgPrincipal:string=dataFake[this.idNumbers]['img'];
  descricao:string=dataFake[this.idNumbers]['descricao'];
  smallCards:DataInterface[]=dataFake.slice(-9, -1).reverse()

  criarStandart(obj:DataInterface):PaginaStandart {
    let standart = new PaginaStandart(obj.id-1, obj.img, obj.titulo)
    return standart
  }

}
