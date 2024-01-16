import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConteudoComponent } from './pages/conteudo/conteudo.component';

export const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'conteudo/:id', component:ConteudoComponent},
  {path:'gyro-zeppeli', component:ConteudoComponent},
  {path:'gyro', component:ConteudoComponent}
];
