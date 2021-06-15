import { PacienteService } from './../paciente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroPaciente } from '../paciente.model';


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})

export class PacienteComponent implements OnInit {

  paciente: CadastroPaciente = {
    id:"",
    nome:"",
    email:"",
    nascimento:"",
    cpf:""
  }

  constructor(private pacienteService: PacienteService,
    private router: Router) { }

  ngOnInit(): void {

  }

  createPaciente(): void {
    this.pacienteService.create(this.paciente).subscribe(() => {
      this.pacienteService.showMessage('Paciente Cadastrado com Sucesso!!')
    })
    this.router.navigate(['/paciente']);
  }

  cancel(): void {
    this.router.navigate(['/paciente'])
  }


}
