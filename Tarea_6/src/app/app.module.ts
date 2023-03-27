import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layouts/nav/nav.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PazariComponent } from './pages/pazari/pazari.component';
import { ColiseumComponent } from './pages/coliseum/coliseum.component';
import { ClaimComponent } from './pages/claim/claim.component';
import { BombermanComponent } from './pages/bomberman/bomberman.component';
import { SnakeComponent } from './pages/snake/snake.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    PazariComponent,
    ColiseumComponent,
    ClaimComponent,
    BombermanComponent,
    SnakeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
