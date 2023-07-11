import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-algoritmos',
  templateUrl: './algoritmos.component.html',
  styleUrls: ['./algoritmos.component.scss']
})
export class AlgoritmosComponent {

  algoritmos: Array<any> = [ 
    { N: '10', log_N: '3.322', _log_N_: '3' },
    { N: '100', log_N: '6.644', _log_N_: '7' },
    { N: '1000', log_N: '9.966', _log_N_: '10' },
    { N: '10000', log_N: '13.288', _log_N_: '13' },
    { N: '100000', log_N: '16.611', _log_N_: '17' },
    { N: '1000000', log_N: '19.933', _log_N_: '20' },
    { N: '10000000', log_N: '23.255', _log_N_: '23' },
    { N: '100000000', log_N: '26.578', _log_N_: '27' },
  ];

  constructor() { }
  NgModule() {
	//this.funcaoLogN_Multiplicacao( this.algoritmos );
  }

  /*
  O logaritmo na base 2 de um número N é o expoente a que 2 deve ser elevado 
  para produzir N.  O logaritmo na base 2 de N é denotado por log N.  É claro 
  que log N só está definido se N é estritamente positivo.
  */
 // creating function for calculate logarithm base 2 N, log N, number positive
 funcaoLogN_Divisao( N: number ){	
	let i = 0;
	let n = 1;
	while (n > 1) {
		n = 2 / n;
		i += 1;
	}
	return i;
 }
 
 funcaoLogN_Multiplicacao( N: number ){	
	let i = 0;
	let n = 1;
	while (n <= N/2) {
		n = 2 * n;
		i += 1;
	}
	return i;
 }

}
