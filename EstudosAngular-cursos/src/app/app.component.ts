import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
        
        public addValue: number = 0;

        public valor: number = 1;
        public destruir = true

        constructor(){}

        public getDados: {nome: string, idade: number} | undefined;
        public setDados(event: {nome: string, idade: number} ){
                this.getDados = event;
        }

        public add(){
                this.addValue += 1;
        }

        public DestruirComponente(){
                this.destruir = false
        }
        public adicionar(): number{
                return this.valor += 1;
        }

        ngOnInit(): void {}
        ngDoCheck(): void {
                console.log("ngDoCheck")
         }
        ngAfterContentInit(){
                console.log("ngAfterContentInit")
        }
        ngAfterContentChecked(){
                console.log("ngAfterContentChecked")
        }
        ngAfterViewChecked(): void {
                console.log("ngAfterViewChecked")
        }
        ngAfterViewInit(): void {
                console.log("ngAfterViewInit")
        }

}
