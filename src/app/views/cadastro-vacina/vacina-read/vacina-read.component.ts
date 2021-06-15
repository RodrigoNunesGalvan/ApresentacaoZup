import { Vacina } from './../vacina.model';
import { VacinaService } from './../vacina.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacina-read',
  templateUrl: './vacina-read.component.html',
  styleUrls: ['./vacina-read.component.css']
})
export class VacinaReadComponent implements OnInit {

  vacinas: Vacina[]
  displayedColumns =['id', 'nomeVacina', 'emailPaciente', 'dataVacina']

  constructor(private vacinaService: VacinaService) { }

  ngOnInit(): void {
    this.vacinaService.read2().subscribe(vacinas =>
      this.vacinas = vacinas)
  }

}
