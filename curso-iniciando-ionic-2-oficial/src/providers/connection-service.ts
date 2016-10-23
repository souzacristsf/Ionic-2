import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
/*
  Generated class for the ConnectionService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ConnectionService {

  constructor(private http: Http) {
    console.log('Hello ConnectionService Provider');

  }
  getCep(cep: string) : Promise<Response>{
    return this.http.get('https://viacep.com.br/ws/'+ cep.trim() + '/json/').toPromise();
  }
}
