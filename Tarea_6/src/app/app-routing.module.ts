import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BombermanComponent } from './pages/bomberman/bomberman.component';
import { ClaimComponent } from './pages/claim/claim.component';
import { ColiseumComponent } from './pages/coliseum/coliseum.component';
import { HomeComponent } from './pages/home/home.component';
import { PazariComponent } from './pages/pazari/pazari.component';
import { SnakeComponent } from './pages/snake/snake.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pazari', component: PazariComponent },
  { path: 'coliseum', component: ColiseumComponent },
  { path: 'claim', component: ClaimComponent },
  { path: 'bomberman', component: BombermanComponent },
  { path: 'snake', component: SnakeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
