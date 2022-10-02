import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './view/pages/login/login.component'
import { NavbarComponent } from './view/layout/navbar/navbar.component';
import { FooterComponent } from './view/layout/footer/footer.component';
import { LojaComponent } from './view/pages/loja/loja.component';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routes';
import { IndexComponent } from './view/pages/index/index.component';
import { LojaItemComponent } from './view/pages/loja-item/loja-item.component';
import { DevSistemasComponent } from './view/pages/dev-sistemas/dev-sistemas.component';
import { ManutencaoComponent } from './view/pages/manutencao/manutencao.component';
import { SuporteTecnicoComponent } from './view/pages/suporte-tecnico/suporte-tecnico.component';
import { CadastroClienteComponent } from './view/pages/cadastro-cliente/cadastro-cliente.component';
import { ClienteService } from './service/cliente.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    LojaComponent,
    IndexComponent,
    LojaItemComponent,
    DevSistemasComponent,
    ManutencaoComponent,
    SuporteTecnicoComponent,
    CadastroClienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
