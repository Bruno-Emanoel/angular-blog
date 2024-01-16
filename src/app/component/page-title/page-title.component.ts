import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-title',
  standalone: true,
  imports: [],
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.css'
})
export class PageTitleComponent {
  @Input() titulo:string = 'Bruno Página'
}
