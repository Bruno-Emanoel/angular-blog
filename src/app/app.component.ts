import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderBarComponent } from "./component/header-bar/header-bar.component";
import { ContentBarComponent } from "./component/content-bar/content-bar.component";
import { BigCardComponent } from "./component/big-card/big-card.component";
import { SmallCardComponent } from "./component/small-card/small-card.component";
import { PageTitleComponent } from "./component/page-title/page-title.component";
import { HomeComponent } from "./pages/home/home.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderBarComponent, ContentBarComponent, BigCardComponent, SmallCardComponent, PageTitleComponent, HomeComponent]
})
export class AppComponent {
  title = 'angular-blog';
}
