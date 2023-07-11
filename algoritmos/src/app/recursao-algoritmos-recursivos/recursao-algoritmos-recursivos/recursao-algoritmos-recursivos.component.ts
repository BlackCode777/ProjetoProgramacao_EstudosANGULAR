import { Component } from '@angular/core';

@Component({
  selector: 'app-recursao-algoritmos-recursivos',
  templateUrl: './recursao-algoritmos-recursivos.component.html',
  styleUrls: ['./recursao-algoritmos-recursivos.component.scss']
})
export class RecursaoAlgoritmosRecursivosComponent {
  /* https://www.ime.usp.br/~pf/algoritmos/aulas/recu.html */

  /*Definindo um vetor*/
  vetor = [1,2,3,4,5,6,7,8,9,10];
  vetor1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  /*Definindo o tamanho do vetor*/
  n = 7;
  n1 = 10;

  constructor(){}
  ngOnInit(): void {}

  /*Definindo uma função que encontra o maior elemento dentro de um vetor*/
  maiorElementoDentroDeUmVetor(vetor: number[], n: number): number{ 
    /*Caso base*/
    if(n == 1){
      return vetor[0];
    }
    /*Chamada recursiva*/
    else{
      return Math.max(vetor[n-1], this.maiorElementoDentroDeUmVetor(vetor, n-1));
    }
  }

}
