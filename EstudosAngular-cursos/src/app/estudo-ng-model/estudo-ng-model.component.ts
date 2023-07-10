import { Component } from '@angular/core';

@Component({
  selector: 'app-estudo-ng-model',
  templateUrl: './estudo-ng-model.component.html',
//   styleUrls: ['./estudo-ng-model.component.css']
})
export class EstudoNgModelComponent {
        
        public valor: boolean = false; // Variavel ngClass
        public heigthPX: string = '20px'; // Variavel ngStyle
        public fontS: string = '30px'
        public background: string = '';

        public nome: string = ''
        public listNome: Array<{nome: string}> = []; // dessa forma se manipula listas 
        public listNgTemplate: Array<{nome: string}> = [{nome: "Anders"}]

        constructor(){}
        ngOnInit(){
                //this.trocaValorNgClass();
        }

        public salvar(){
                this.listNome.push({ nome: this.nome }); // Aqui cria um objeto lista e usa o push pra monstrar ele 
                this.nome = "";
        }

        /* 
        public trocaValorNgClass(){
                setInterval( () => {
                       
                        if(this.valor && this.valor != null && this.valor != undefined){
                                this.valor = false;
                        } else {
                                this.valor = true;
                        }
                        
                        if( this.heigthPX == '20px' && this.heigthPX != null && this.heigthPX != undefined){
                                this.heigthPX = '50px';
                                this.background = '#d400ff';
                        }else{
                                this.heigthPX = '20px';
                                this.background = '#c8ff00';
                        }
                }, 2000 );
        } 
        */

}
