import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {Repositorio} from './repositorio';
@Injectable({
provideIn:'root',
})
export class GithubService{
 private urlBase= environment.urlBase;
 constructor(private http: HttpClient) {}
 public getRepositorio(nomeUsuario:string): Observable<Repositorio[]> {
   return this.http.get<any>(`${this.urlBase}/users/${nomeUsuario}/repos´)

 }
