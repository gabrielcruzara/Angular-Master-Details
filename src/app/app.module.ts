import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './@shared';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BemVindoComponent } from './pages/bem-vindo/bem-vindo.component';
import { ShellComponent } from './shell/shell.component';
import { CadastroServicosComponent } from './pages/cadastro-servicos/cadastro-servicos.component';
import { CadastroServicoComponent } from './pages/meus-servicos/cadastro-servico/cadastro-servico.component';



@NgModule({
  declarations: [
    AppComponent,
    BemVindoComponent,
    ShellComponent,
    CadastroServicosComponent,
    CadastroServicoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
