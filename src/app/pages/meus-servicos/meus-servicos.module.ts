import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeusServicosRoutingModule } from './meus-servicos-routing.module';
import { CadastroServicoComponent } from './cadastro-servico/cadastro-servico.component';
import { SharedModule } from 'src/app/@shared';


@NgModule({
  declarations: [CadastroServicoComponent],
  imports: [
    CommonModule,
    MeusServicosRoutingModule,
    SharedModule,
  ]
})
export class MeusServicosModule { }
