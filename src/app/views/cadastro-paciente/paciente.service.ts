import { EMPTY, Observable } from 'rxjs';
import { CadastroPaciente } from './paciente.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { map, catchError, throwIfEmpty } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  baseUrl= "http://localhost:8080/novoPaciente/create"
  consultaUrl= "http://localhost:8080/novoPaciente/consulta"

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

  create(paciente: CadastroPaciente): Observable<CadastroPaciente>{
    return this.http.post<CadastroPaciente>(this.baseUrl, paciente,)
      .pipe(
        map(obj => obj),
        catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: CadastroPaciente): Observable<CadastroPaciente> {
    console.log(e)
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }

  read(): Observable<CadastroPaciente[]> {
    return this.http.get<CadastroPaciente[]>(this.consultaUrl)
  }

  readById(id: string): Observable<CadastroPaciente> {
    const url = `${this.consultaUrl}/${id}`
    return this.http.get<CadastroPaciente>(url)
  }

}
