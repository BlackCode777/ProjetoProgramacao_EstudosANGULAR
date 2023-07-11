import { Component } from '@angular/core';

@Component({
  selector: 'app-algoritmos',
  templateUrl: './algoritmos.component.html',
  styleUrls: ['./algoritmos.component.scss']
})
export class AlgoritmosComponent {

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
 
  public functionTransf2(){
    setInterval(() => {
      this.N2 = Math.floor(Math.random() * 100000000) + 1;
    }, 30000);
    return this.N2;
  }

  public functionTransf(){
    setInterval(() => {
      this.N = Math.floor(Math.random() * 100000000) + 1;
    }, 30000);
    return this.N;
  }



  constructor() { }
  NgModule() {}

 funcaoLogN_Divisao( N: number ){	
	let i = 0;
	let n = N;
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
