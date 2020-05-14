import { Component, OnInit } from '@angular/core';
import { SomarService } from '../../services';

@Component({
  selector: 'app-somar',
  templateUrl: './somar.component.html',
  styleUrls: ['./somar.component.css']
})
export class SomarComponent implements OnInit {
  private valor1: number;
  constructor(private somar: SomarService) { }

  ngOnInit(): void {
    this.valor1= 0;
  }

  calcula(valorInserido:number){
    this.valor1 = this.somar.somar(this.valor1, valorInserido);
  }

  get pegaValor(){
    return this.valor1;
  }

}
