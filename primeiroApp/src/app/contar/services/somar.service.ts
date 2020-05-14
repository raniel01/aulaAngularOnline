import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SomarService {
  private valor1: number;
  constructor() { }
  somar(valor1:number, valor2:number): number{
    return valor1+valor2;
  }
}
