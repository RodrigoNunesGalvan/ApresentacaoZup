import { PacienteService } from './paciente.service';
import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.css']
})
export class CadastroPacienteComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService,
     private pacienteService: PacienteService) {
    headerService.headerData = {
      title: ' Paciente ',
      icon: ' health_and_safety ',
      routeUrl: '/pacientes'
    }
   }

  ngOnInit(): void {
    this.pacienteService.read();
  }

  navigateToPaciente(): void {
    this.router.navigate(["/paciente/create"])
  }

}
