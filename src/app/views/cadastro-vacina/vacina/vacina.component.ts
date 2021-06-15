import { Vacina } from './../vacina.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VacinaService } from '../vacina.service';

@Component({
  selector: 'app-vacina',
  templateUrl: './vacina.component.html',
  styleUrls: ['./vacina.component.css']
})
export class VacinaComponent implements OnInit {

  vacina: Vacina = {
    id: '',
    nomeVacina: '',
    emailPaciente: '',
    dataVacina: '',
  }

  constructor(private vacinaService: VacinaService,
    private router: Router) { }

  ngOnInit(): void {
  }
  createVacina(): void {
      this.vacinaService.create2(this.vacina).subscribe(() => {
        this.vacinaService.showMessage('Vacina Cadastrada com Sucesso!!')
         this.router.navigate(['/vacina'])
      })
  }
  cancel(): void {
    this.router.navigate(['/vacina'])
  }

}
