import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {

        public nome: string = "Anderson DataBinding"
        public idade: number = 35

        /* Do componente PropertyBinding */
        public imagemURL: string = 'https://i.pinimg.com/564x/3a/d5/3f/3ad53f6f17faf96808099ff8c242c199.jpg'
        public checkedDisable: boolean = false

        /* Destruindo componente */
        public destruir: boolean = true
        public destruirCompo(){ this.destruir = false;}
        public ativarCompo(){ this.destruir = true }

}
