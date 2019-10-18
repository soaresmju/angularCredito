import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreditoService {

  constructor() { }
  CreditoSomar(v1:number, v2:number):number{
    return v1+v2;
  }
}
