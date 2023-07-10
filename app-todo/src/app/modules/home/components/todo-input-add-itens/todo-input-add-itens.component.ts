import { Component, EventEmitter, Output } from '@angular/core';

@Component({
        selector: 'app-todo-input-add-itens',
        templateUrl: './todo-input-add-itens.component.html',
        styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent {
        
        constructor() { }
        ngOnInit(): void { }

        /*Decorator que lança os dados pra cima pra serem usados por outros componentes*/
        @Output() public emitItemTaskList = new EventEmitter();
        public addItemTaskListVar: string = "";
        
        public addItemsInListTask(): void {                
                this.addItemTaskListVar = this.addItemTaskListVar.trim(); // Para remover todos os espaços               
                if (this.addItemTaskListVar) { // console.log(this.addItemTaskListVar)                        
                        this.emitItemTaskList.emit(this.addItemTaskListVar); // Emite o evento e joga o dados pra cima                        
                        this.addItemTaskListVar = ""; // Limpa o campo input apos pressionar o enter
                }
        }
}

