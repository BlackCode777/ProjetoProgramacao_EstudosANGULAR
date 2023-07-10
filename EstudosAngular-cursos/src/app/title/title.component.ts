import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-title', 
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent  implements OnInit, OnChanges, OnDestroy{

      

        @Input() public title: string = "Meu Nome é Anderson"

        constructor(
                private appComponent: AppComponent
        ){}

        ngOnDestroy(): void {
                console.log(" O componente do title foi destruido com ngOnDestroy da variável 'destruir' " 
                                + this.appComponent.destruir)
        }
        
        ngOnInit() {}
        ngOnChanges(): void{
                console.log("Foi alterado aqui !")
        }
}
