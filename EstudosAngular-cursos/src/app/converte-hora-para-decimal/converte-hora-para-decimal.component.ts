import { Component } from '@angular/core';

@Component({
  selector: 'app-converte-hora-para-decimal',
  templateUrl: './converte-hora-para-decimal.component.html',
  styleUrls: ['./converte-hora-para-decimal.component.css']
})
export class ConverteHoraParaDecimalComponent {

        Decimal: number = 0;
        Horas!: number;
        Minutos!: number;
        CONST = 60;

        constructor(){}
        ngOnInit(){}

        funcConverteHoraParaDecimal(){
                this.Decimal = (this.Horas) + ( this.Minutos / this.CONST );
                // if( this.Decimal == undefined ){
                //         return "Insira um"
                // }
                return this.Decimal;
        }

        /*  
                Para converter horas para decimal, você precisa dividir o número de minutos por 60 e adicionar o resultado ao número de horas. 
                O resultado será o valor decimal equivalente às horas fornecidas.
                Aqui está a fórmula para converter horas para decimal:
                Decimal = Horas + (Minutos / 60)
                Decimal = resultado
                Horas = x
                Minutos = y
                CONST = 60
                funcConverteHoraParaDecimal( Decimal: number, Horas: number, Minutos: number, CONST: number ){
                        Decimal = Horas + ( Minutos / CONST );
                        return Decimal
                }
                Por exemplo, se você deseja converter 2 horas e 30 minutos em formato decimal:
                Decimal = 2 + (30 / 60)
                Decimal = 2,5
                Portanto, 2 horas e 30 minutos é equivalente a 2,5 em formato decimal.
       */

}
