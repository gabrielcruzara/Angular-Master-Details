import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroServicoComponent } from './cadastro-servico/cadastro-servico.component';

const routes: Routes = [
  { path: 'cadastro-servico', component: CadastroServicoComponent, data: { title: ('Cadastro Serviço') } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeusServicosRoutingModule { }


