import { NgSwitch } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
        selector: 'app-estudo-diretiva-ng-for-arrays',
        templateUrl: './estudo-diretiva-ng-for-arrays.component.html',
        styleUrls: ['./estudo-diretiva-ng-for-arrays.component.css']
})

export class EstudoDiretivaNgForArraysComponent {

        public sintaxeHTML: string = ' {{ <li *ngFor="let item of list" >  Nome :  {{ item.nome }} / Idade :  {{ item.idade }}  </li> }} '
        public sintaxeTS: string = `
                                public list: Array<{ nome: string, idade: number }> = [
                                        { nome: "Anderson Martins", idade: 21 },
                                        { nome: "Carlos Clodoaldo", idade: 33 },
                                        { nome: "Josy Martins", idade: 44 }
                                ];        
        `
        public list: Array<{ nome: string, idade: number }> = [
                { nome: "Anderson Martins", idade: 21 },
                { nome: "Carlos Clodoaldo", idade: 33 },
                { nome: "Josy Martins", idade: 44 }
        ];

        /* NgSwitch testes de condicional */
        @Input() public nomeSwitch: string = "";

        constructor() { }
        ngOnInit() {
               this.funcSwitchCase()
        }

        public funcSwitchCase(){   
                let nome = this.nomeSwitch             
                if(nome){
                        switch (nome) {
                                case 'anderson':
                                        return 'Anderson';
                                case 'josy':
                                        return 'Josy'
                                case 'carlos':
                                        return 'Carlos'
                                case 'henrique':
                                        return 'Henrique'
                                case 'clodoaldo':
                                        return 'Clodoaldo'
                                default:
                                        'Indefinido'
                        }
                }
                return nome
        }

        public onClickEventList(event: MouseEvent) {
                console.log(event)
        }

        /* Criando uma função para adicionar itens na lista */
        public onClickListADD() {
                this.list.push({ nome: "Andrade", idade: 43 })
        }

}
