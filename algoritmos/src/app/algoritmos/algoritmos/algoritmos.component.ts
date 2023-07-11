import { Component } from '@angular/core';

@Component({
  selector: 'app-algoritmos',
  templateUrl: './algoritmos.component.html',
  styleUrls: ['./algoritmos.component.scss'],
})
export class AlgoritmosComponent {
  /*

  https://www.ime.usp.br/~pf/algoritmos/aulas/floor-lg.html

  Piso do logaritmo na base 2
  O logaritmo na base 2 de um número N é o expoente a que 2 deve ser elevado para 
  produzir N.  O logaritmo na base 2 de N é denotado por log N.  É claro que log N 
  só está definido se N é estritamente positivo.

  Problema: dado um inteiro estritamente positivo N, calcular o piso de log N.

  O piso de log N, usualmente denotado por  ⌊log N⌋, é aproximadamente igual ao número 
  de bits na representação binária de N.  A seguinte tabela mostra alguns valores de 
  log N (aproximados até a terceira casa decimal) bem como os correspondentes valores 
  de ⌊log N⌋:

  */

  algoritmos = [
    { N: 10, log_N: '3.322', _log_N_: '3' },
    { N: 100, log_N: '6.644', _log_N_: '7' },
    { N: 1000, log_N: '9.966', _log_N_: '10' },
    { N: 10000, log_N: '13.288', _log_N_: '13' },
    { N: 100000, log_N: '16.611', _log_N_: '17' },
    { N: 1000000, log_N: '19.933', _log_N_: '20' },
    { N: 10000000, log_N: '23.255', _log_N_: '23' },
    { N: 100000000, log_N: '26.578', _log_N_: '27' },
  ];
  /*criando um intervalo de número inteiro com setInterval()*/
  public N = Math.floor(Math.random() * 100000000) + 1;
  public N2 = Math.floor(Math.random() * 100000000) + 1;
  public N3 = Math.floor(Math.random() * 100000000) + 1;
  public N4 = Math.floor(Math.random() * 100000000000) + 1;

  public versaoAlter = Math.floor(Math.random() * 10000000000010) + 1;
  public v = Math.floor(Math.random() * 1000000) + 1;
  public critiqueSeguinteVersaoLG_var = Math.floor(Math.random() * 1000000) + 1;
  public calculaMaiorPot2NaoUltrapasseN_var = Math.floor(Math.random() * 1000000) + 1;

  constructor() {}
  NgModule() {}

  /*Logaritmos na base 10.  Escreva uma função que calcule o piso do logaritmo na base 10 de um número.*/
  funcaoLog10(N: number) {
    let x = Math.log(N) / Math.log(10);
    return Math.floor(x);
  } 

  potencia(N: number) {
    let p = 1;
    for(let j = 1; j <= N; ++j ){
      p = 2 * p;
    }
    return p;
  }
  calculaMaiorPot2NaoUltrapasseN(N: number) {
    let i = 0;
    for (let i = 0; this.potencia(i) <= N; ++i) {}
    return i - 1;
  }

  critiqueSeguinteVersaoLG(N: number) {
    let i = 2;
    let n = 4;

    if(N == 1){
      return 0;
    }
      
    if(N == 2){
      return 1;
    }
    while (n <= N) {
      n = 2 * n;
      i += 1;
    }
    return i - 1;
  }

  seguinteVersaoAlternativaLG(N: number) {
    let achou = 0,
      i = 0,
      n = 1;
    while (!achou) {
      n *= 2;
      i += 1;
      if (n > N) achou = 1;
    }
    return i - 1;
  }

  versaoAlternativaFuncLG(N: number) {
    let i = 0;
    for (let n = 2; n <= N; n = 2 * n) {
      i += 1;
    }
    return i - 1;
  }

  codigoAbaixoRiscoErrado(N: number) {
    let i = 0,
      n = 1;
    while (n <= N) {
      n = 2 * n;
      i += 1;
    }
    return i - 1;
  }

  log10(x: number) {
    return Math.log(x) / Math.LN10;
  }
  funcaoLog10ComFloor(N: number) {
    let x = this.log10(N) / this.log10(2);
    return Math.floor(x);
  }

  // public functionTransf2() {
  //   setInterval(() => {
  //     this.N2 = Math.floor(Math.random() * 100000000) + 1;
  //   }, 30000);
  //   return this.N2;
  // }

  // public functionTransf() {
  //   setInterval(() => {
  //     this.N = Math.floor(Math.random() * 100000000) + 1;
  //   }, 30000);
  //   return this.N;
  // }

  funcaoLogN_Divisao(N: number) {
    let i = 0;
    let n = N;
    while (n > 1) {
      n = 2 / n;
      i += 1;
    }
    return i;
  }

  funcaoLogN_Multiplicacao(N: number) {
    let i = 0;
    let n = 1;
    while (n <= N / 2) {
      n = 2 * n;
      i += 1;
    }
    return i;
  }
}
