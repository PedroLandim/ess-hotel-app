import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// formsModule e reactiveFormsModule para envio de formulario pelo angular

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListaAtracoesPageComponent } from './pages/lista-atracoes-page/lista-atracoes-page.component';
import { AtracaoPageComponent } from './pages/atracao-page/atracao-page.component';
import { DescontosPageComponent } from './pages/descontos-page/descontos-page.component';
import { SobrePageComponent } from './pages/sobre-page/sobre-page.component';
import { PerfilPageComponent } from './pages/perfil-page/perfil-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { UserEvaluationComponent } from './components/user-evaluation/user-evaluation.component';
import { DescontosPageExtendedComponent } from './pages/descontos-page-extended/descontos-page-extended.component';
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { HttpClientModule } from '@angular/common/http'; 
import { PagamentosPageComponent } from './pages/pagamentos-page/pagamentos-page.component';


@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    ListaAtracoesPageComponent,
    AtracaoPageComponent,
    DescontosPageComponent,
    SobrePageComponent,
    PerfilPageComponent,
    NotFoundPageComponent,
    UserEvaluationComponent,
    DescontosPageExtendedComponent,
    HotelCardComponent,
    PagamentosPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdbCarouselModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
