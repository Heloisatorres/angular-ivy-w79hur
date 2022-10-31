import { Component, VERSION } from '@angular/core';
import {HttpErrorResponse,HttpResponse} from '@angular/common/http':
import {GithubService} from './github.service';
import {Repositorio} from './repositorio';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}
public repositorios: Repositorio[]=[];
public nomeDeUsuario= '';
constructor(private github Service: GithubService) {}
public getRepositorios(): void {
  this.githubService.getRepositorio(this.nomeDeUsuario).subscribe{
    next:response: Repositorios=response;
  },
  error: (erro:HttpErrorResponse) => {
    console.error(error.message);
  },
}