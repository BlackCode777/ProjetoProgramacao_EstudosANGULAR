import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovoComponentOneComponent } from './novo-component-one/novo-component-one.component';
import { NovoComponentTwoComponent } from './novo-component-two/novo-component-two.component';
import { NovoComponentTreeComponent } from './novo-component-tree/novo-component-tree.component';
import { NovoComponentFourComponent } from './novo-component-four/novo-component-four.component';
import { NovoComponentFiveComponent } from './novo-component-five/novo-component-five.component';
import { NovoComponentSixComponent } from './novo-component-six/novo-component-six.component';
import { NovoComponentSevenComponent } from './novo-component-seven/novo-component-seven.component';
import { TransferenciaEntreCompComponent } from '../transferencia-de-dados-entre-componentes/transferencia-entre-comp/transferencia-entre-comp.component';
import { TransferenciaDadoFilhoParaPaiComponent } from '../transferencia-de-dados-entre-componentes/transferencia-dado-filho-para-pai/transferencia-dado-filho-para-pai.component';

@NgModule({
        declarations: [
                NovoComponentOneComponent,
                NovoComponentTwoComponent,
                NovoComponentTreeComponent,
                NovoComponentFourComponent,
                NovoComponentFiveComponent,
                NovoComponentSixComponent,
                NovoComponentSevenComponent,
                TransferenciaEntreCompComponent,
                TransferenciaDadoFilhoParaPaiComponent
        ],
        exports: [
                NovoComponentOneComponent,
                NovoComponentTwoComponent,
                NovoComponentTreeComponent,
                NovoComponentFourComponent,
                NovoComponentFiveComponent,
                NovoComponentSixComponent,
                NovoComponentSevenComponent,
                TransferenciaEntreCompComponent,
                TransferenciaDadoFilhoParaPaiComponent
        ],
        imports: [
                CommonModule
        ]
})
export class SharedModule { }
