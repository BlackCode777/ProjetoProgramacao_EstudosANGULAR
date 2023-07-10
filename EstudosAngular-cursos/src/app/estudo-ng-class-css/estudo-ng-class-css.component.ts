import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
        selector: 'app-estudo-ng-class-css',
        templateUrl: './estudo-ng-class-css.component.html',
        styleUrls: ['./estudo-ng-class-css.component.css']
})
export class EstudoNgClassCssComponent implements OnInit, DoCheck{

        public renderEstrela: boolean = false
        public renderEstrelaStrong: boolean = false

        constructor() { }
        ngOnInit() {
                // this.onClickNull()
                // this.onClickStrong()
         }
        ngDoCheck(): void { }

        onClickNull(){ this.renderEstrela = !this.renderEstrela }
        onClickStrong(){ this.renderEstrelaStrong = !this.renderEstrelaStrong }

        
        /*         
                name = 'Angular 5';
                password: string = '';
                c_password: string = '';
                
                toggle1: boolean = false; // <i [ngClass]="toggle1 ? 'fas fa-eye' : 'fas fa-eye-slash'"></i>
                toggle2: boolean = false; // <i [ngClass]="toggle2 ? 'fa fa-eye' : 'fa fa-eye-slash'"></i>

                changeType(input_field_password, num){
                        if(input_field_password.type=="password")
                                input_field_password.type = "text";
                        else
                                input_field_password.type = "password";
                        if(num == 1)
                                this.toggle1 = !this.toggle1;
                        else
                                this.toggle2 = !this.toggle2;
                } 
        */

}
