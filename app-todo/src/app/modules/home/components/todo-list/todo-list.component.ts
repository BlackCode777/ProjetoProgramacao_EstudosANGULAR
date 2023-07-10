import { Component, DoCheck } from '@angular/core';

// Interface
import { TaskList } from '../../model/task-list';

@Component({
        selector: 'app-todo-list',
        templateUrl: './todo-list.component.html',
        styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

        public taskList: Array<TaskList> = JSON.parse(localStorage.getItem('list') || '[]');
        constructor() { }

        /* Trocando a posição das tasks marcadas para última posição */
        ngDoCheck(): void {
                if (this.taskList) {
                        // this.taskList.sort((primeiro, ultimo) => Number(primeiro.checked) - Number(ultimo.checked));
                        /*Adicionando na lista e salvando no localStorage*/
                        this.addTaskLocalStorage(this.taskList);
                }

        }

        /* Sempre que tiver uma adição de evento na lista ele deve ser armazenado no localstorage */
        public addTaskLocalStorage(list: Array<TaskList>): void {
                this.taskList.sort((primeiro, ultimo) => Number(primeiro.checked) - Number(ultimo.checked));
                localStorage.setItem('taskList', JSON.stringify(list));
        }

        /*Created function for delet task and ask if delet task*/
        validationInput(event: string, index: number) {
                if (!event.length) {
                        const confirmation = window.confirm('task esta vazia vc deseji continuar?');
                        if (confirmation) {
                                this.deleteItem(index)
                        }
                }
        }

        /* Function for pass task not checked for up position and task marked checked for down position */
        public markListCheckedForUpPosition() {
                this.taskList.forEach((task, index) => {
                        if (index > 0) {
                                task.checked = true;
                        }
                })
        }

        /* Capturando eventos emitidos e adicionando eventos na lista tipados */
        public setEmitTaskList(event: string) {
                this.taskList.push({ task: event, checked: false });
                //console.log(event);
        }

        public deleteItem(index: number): void {
                this.taskList.splice(index, 1);
        }

        public deleteAllItemsInList(): void {
                const confirm = window.confirm('Você deseja deletar tudo?')
                if (confirm && this.taskList.length > 0) {
                        this.taskList = [];
                }
        }

}

// ng g i /modules/home/model/TaskList
