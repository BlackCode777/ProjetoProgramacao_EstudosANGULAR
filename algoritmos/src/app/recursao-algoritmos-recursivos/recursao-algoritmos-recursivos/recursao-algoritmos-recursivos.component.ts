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

  /* // Recebe v e i < n e devolve o valor de um elemento máximo do vetor v[i..n-1]. */
  /* 1. Escreva uma função recursiva que receba um vetor v e um inteiro i < n e devolva o valor de um elemento máximo do vetor v[i..n-1].  [Solução: ./solucoes/recu2.html#part1] */
  public vetor0: number[] = [124, 23, 345, 37, 87, 2, 345, 67];
  public n0: number = 10;
  public i0: number = 0;
  public devolveValorElementoMaximoDoVetor(
    vetor0: number[],
    i0: number,
    n0: number
  ): number {
    if (i0 == n0 - 1) {
      return vetor0[i0];
    } else {
      let maior;
      maior = this.devolveValorElementoMaximoDoVetor(vetor0, i0 + 1, n0);
      if (maior > vetor0[i0]) {
        return maior;
      } else {
        return vetor0[i0];
      }
    }
  }

  /* Programa de teste.  Escreva um pequeno programa para testar a função recursiva maximo dada acima.  O seu 
  programa deve gerar um vetor aleatório e encontrar um elemento máximo desse vetor. Acrescente ao seu programa 
  uma função que confira a resposta dada por maximo.  [Solução: ./solucoes/recu2.html#part2] */
  public vetor_1: number[] = [];
  public n_1: number = 10;
  programaDeTesteGeraVetorAleatorio(vetor_1: number[], n: number) {
    // Gerando uma variavel de vetor aleatório
    for (let i = 0; i < n; i++) {
      vetor_1.push(Math.floor(Math.random() * 1000));
    }
    // encontrar um elemento máximo desse vetor
    let maior = this.maiorElementoDentroDeUmVetor(vetor_1, n);
    if (maior >= this.maiorElementoDentroDeUmVetor(vetor_1, n)) {
      return maior;
    } else {
      return this.maiorElementoDentroDeUmVetor(vetor_1, n);
    }
  }

  /*8.Critique a seguinte função recursiva que promete encontrar o valor de um elemento máximo de v[0..n-1]*/
  public fEVE = 8;
  public fEVEVetor = [1013, 200, 330, 4, 5, 620, 730, 801];
  funcEncValElemM(n: number, vetor: number[]): number {
    if (n == 1) {
      return vetor[0];
    }
    if (this.funcEncValElemM(n - 1, vetor) < vetor[n - 1]) {
      return vetor[n - 1];
    } else {
      return this.funcEncValElemM(n - 1, vetor);
    }
  }

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
