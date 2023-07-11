import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlgoritmosComponent } from './algoritmos/algoritmos.component';



@NgModule({
  declarations: [
    AlgoritmosComponent,
  ],
  /*exportando este módulo*/
  exports: [ AlgoritmosComponent ],
  imports: [
    CommonModule
  ]
})
export class AlgoritmosModule { }
