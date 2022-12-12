import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Cargo } from '../models/cargo';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(`${API_CONFIG.baseUrl}/cargos`).pipe(
      catchError(error => {
        alert("Erro ao buscar dados sobre o cargos");
        console.error(error);
        return EMPTY;
      })
    );
  }
  public findById(idCargo: string): Observable<Cargo> {
    return this.http.get<Cargo>(`${API_CONFIG.baseUrl}/cargos/${idCargo}`).pipe(
      catchError(error => {
        alert("Erro ao buscar dados sobre o cargo");
        console.error(error);
        return EMPTY;
      })
    )
  }

  public delete(id: number): Observable<Cargo> {
    return this.http.delete<Cargo>(`${API_CONFIG.baseUrl}/cargos/${id}`).pipe(
      catchError(error => {
        alert("Erro ao excluir cargo.");
        console.error(error);
        return EMPTY;
      })
    );
  }
  public create(cargo: Cargo): Observable<Cargo>{
    return this.http.post<Cargo>(`${API_CONFIG.baseUrl}/cargos`, cargo).pipe(
      catchError(error =>{
        alert("Erro ao cadastrar novo cargo.");
        console.log(error);
        return EMPTY;
      })
    )
  }
  public update(cargo: Cargo){
    const data = {
      nome: cargo.nome,
      descricao: cargo.descricao,
      salario: cargo.salario
    }
    return this.http.put<Cargo>(`${API_CONFIG.baseUrl}/cargos/${cargo.idCargo}`, data).pipe(
      catchError(error => {
      alert("Erro ao editar cargo.");
      console.error(error)
      return EMPTY;
    })
    )
  }
}
