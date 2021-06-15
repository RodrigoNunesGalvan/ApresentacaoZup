import { CadastroPaciente } from './../paciente.model';
import { PacienteService } from './../paciente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente-read',
  templateUrl: './paciente-read.component.html',
  styleUrls: ['./paciente-read.component.css']
})
export class PacienteReadComponent implements OnInit {

  pacientes: CadastroPaciente[]
  displayedColumns = ['id', 'nome', 'email', 'nascimento', 'cpf']

  constructor(private pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.pacienteService.read().subscribe(pacientes =>
      this.pacientes = pacientes)
  }


}
