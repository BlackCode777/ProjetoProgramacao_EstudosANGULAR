import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding-test',
  templateUrl: './event-binding-test.component.html',
  styleUrls: ['./event-binding-test.component.css']
})
export class EventBindingTestComponent {
        
        public position: {x: number, y:number} = {x: 0, y:0}

        constructor(){}
        ngOnInit(){}

        public mouseMoveT(valor: MouseEvent){
                console.log(valor)
                this.position.x  = valor.offsetX
                this.position.y = valor.offsetY
        }

        public alertaInfo(valor: MouseEvent){
                console.log(valor)
        }

        // public alertaInfo(valor: string){
        //         alert("Pegando eventos com event-binding")
        // }

}
