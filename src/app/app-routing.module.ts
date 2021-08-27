import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BemVindoComponent } from './pages/bem-vindo/bem-vindo.component';


const routes: Routes = ([
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: 'bem-vindo', component: BemVindoComponent },
  {
    path: 'cadastro-servicos',
    loadChildren: () => import ('./pages/meus-servicos/meus-servicos.module').then((m) => m.MeusServicosModule)
  },
]);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
