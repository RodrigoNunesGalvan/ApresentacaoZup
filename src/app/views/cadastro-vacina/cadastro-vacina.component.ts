import { VacinaService } from './vacina.service';
import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-vacina',
  templateUrl: './cadastro-vacina.component.html',
  styleUrls: ['./cadastro-vacina.component.css']
})
export class CadastroVacinaComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService,
     private vacinaService: VacinaService) {

    headerService.headerData = {
      title: ' Vacinação ',
      icon: ' health_and_safety ',
      routeUrl: '/vacinas'
    }
   }

  ngOnInit(): void {
    this.vacinaService.read2();

  }
  navigateToVacina(): void {
    this.router.navigate(["/vacina/create"])
  }

}
