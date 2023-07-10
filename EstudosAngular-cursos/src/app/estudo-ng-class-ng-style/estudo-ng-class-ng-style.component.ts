import { Component } from '@angular/core';

@Component({
  selector: 'app-estudo-ng-class-ng-style',
  templateUrl: './estudo-ng-class-ng-style.component.html',
  styleUrls: ['./estudo-ng-class-ng-style.component.css']
})
export class EstudoNgClassNgStyleComponent {

        public valor: boolean = false; // Variavel ngClass
        public heigthPX: string = '20px'; // Variavel ngStyle
        public fontS: string = '30px'
        public background: string = '';

        constructor(){}
        ngOnInit(){
                this.trocaValorNgClass();
        }

        public trocaValorNgClass(){
                setInterval( () => {

                        /* Manipulando NgClass */
                        if(this.valor && this.valor != null && this.valor != undefined){
                                this.valor = false;
                        } else {
                                this.valor = true
                        }

                        /* Manipulando NgStyle */
                        if( this.heigthPX == '20px' && this.heigthPX != null && this.heigthPX != undefined){
                                this.heigthPX = '50px'
                                this.background = '#d400ff'
                        }else{
                                this.heigthPX = '20px'
                                this.background = '#c8ff00'
                        }

                }, 2000 )

        }

}
