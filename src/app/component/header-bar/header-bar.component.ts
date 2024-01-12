import { Component } from '@angular/core';
import { HeaderOptionsComponent } from "../header-options/header-options.component";
import { HeaderSearchComponent } from "../header-search/header-search.component";

@Component({
    selector: 'header-bar',
    standalone: true,
    templateUrl: './header-bar.component.html',
    styleUrl: './header-bar.component.css',
    imports: [HeaderOptionsComponent, HeaderSearchComponent]
})
export class HeaderBarComponent {

}
