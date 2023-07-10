import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-interpolation',
  templateUrl: './data-binding-interpolation.component.html',
  styleUrls: ['./data-binding-interpolation.component.css']
})
export class DataBindingInterpolationComponent implements OnInit{

        public nome: string = "Anderson DataBinding"
        public idade: number = 35

        constructor(){}

        ngOnInit(){}

}
