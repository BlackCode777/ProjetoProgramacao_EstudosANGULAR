import { Component } from '@angular/core';

@Component({
  selector: 'app-recursao-algoritmos-recursivos',
  templateUrl: './recursao-algoritmos-recursivos.component.html',
  styleUrls: ['./recursao-algoritmos-recursivos.component.scss'],
})
export class RecursaoAlgoritmosRecursivosComponent {
  /* https://www.ime.usp.br/~pf/algoritmos/aulas/recu.html */

  /*Definindo um vetor*/
  vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  vetor1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  /*Definindo o tamanho do vetor*/
  n = 7;
  n1 = 10;

  constructor() {}
  ngOnInit(): void {}

  /* 7. Critique a seguinte função recursiva que promete encontrar o valor de um elemento máximo de v[0..n-1]*/
  public fEVEMaximo = 8;
  public fEVEMaximoVetor = [101, 200, 33, 14, 45, 600, 732, 80];
  funcaoEncontraValorElementoMaximo(n: number, vetor: number[]) {
    // Se o n for == 1
    if (n == 1) {
      return vetor[0];
    }
    // Se o n for == 2
    if (n == 2) {
      if (vetor[0] < vetor[1]) {
        return vetor[1];
      } else {
        return vetor[0];
      }
    }
    let maior: number = this.funcaoEncontraValorElementoMaximo(n - 1, vetor);
    if (maior < vetor[n - 1]) {
      return vetor[n - 1];
    } else {
      return maior;
    }

  }

  /*Definindo uma função que encontra o maior elemento dentro de um vetor*/
  /* Formas diferentes de escrever uma função com recursividade */
  maiorElementoDentroDeUmVetor(vetor: number[], n: number): number {
    /*Caso base*/
    if (n == 1) {
      return vetor[0];
    }

    let maior = this.maiorElementoDentroDeUmVetor(vetor, n - 1);
    if (maior > vetor[n - 1]) {
      return maior;
    } else {
      return vetor[n - 1];
    }

    /*Chamada recursiva*/
    // else{
    //   return Math.max(vetor[n-1], this.maiorElementoDentroDeUmVetor(vetor, n-1));
    // }
  }
}
