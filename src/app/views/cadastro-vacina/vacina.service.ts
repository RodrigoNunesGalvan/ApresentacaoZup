import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Vacina } from './vacina.model';

@Injectable({
  providedIn: 'root'
})
export class VacinaService {

  baseUrl= "http://localhost:8080/createVacina"
  consultaUrl= "http://localhost:8080/consultaVacina"

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }


  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create2(vacina: Vacina): Observable <Vacina> {
    return this.http.post<Vacina>(this.baseUrl, vacina)
      .pipe(
        map(obj => obj),
        catchError(e => this.errorHandler(e))
      );
    }
    errorHandler(e: Vacina): Observable<Vacina> {
      this.showMessage('Cadastrado com Sucesso', false);
        return EMPTY;
  }
    read2(): Observable<Vacina[]> {
      return this.http.get<Vacina[]>(this.consultaUrl)
    }
    readById(id: string): Observable<Vacina> {
      const url = `${this.consultaUrl}/${id}`
      return this.http.get<Vacina>(url)
    }


}
