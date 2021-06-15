
import { VacinaComponent } from './views/cadastro-vacina/vacina/vacina.component';
import { PacienteComponent } from './views/cadastro-paciente/paciente/paciente.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { CadastroPacienteComponent } from './views/cadastro-paciente/cadastro-paciente.component';
import { CadastroVacinaComponent } from './views/cadastro-vacina/cadastro-vacina.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "paciente",
  component: CadastroPacienteComponent
},
{
  path: "vacina",
  component: CadastroVacinaComponent
},
{
  path: "paciente/create",
  component: PacienteComponent
},
{
  path: "vacina/create",
  component: VacinaComponent
}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule]

})
export class AppRoutingModule { }
