import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from "../../component/page-title/page-title.component";
import { SmallCardComponent } from "../../component/small-card/small-card.component";
import { BigCardComponent } from "../../component/big-card/big-card.component";
import { ContentBarComponent } from "../../component/content-bar/content-bar.component";
import { HeaderBarComponent } from "../../component/header-bar/header-bar.component";
import { FooterCardComponent } from "../../component/footer-card/footer-card.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [PageTitleComponent, SmallCardComponent, BigCardComponent, ContentBarComponent, HeaderBarComponent, FooterCardComponent]
})
export class HomeComponent {

}
