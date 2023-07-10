# AppTodo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Funcionalidade para adicionar tasks na lista - passando dados do compon.FILHO p/ compon.PAI
        FILHO: todo-list-add-itens/componente HTML:
                <input type="text" placeholder="Digite uma nova task aqui!" [(ngModel)]="addItemTaskListVar" (keyup.enter)="addItemsInListTask()" >

        FILHO: todo-list-add-itens/componente TS:
                @Output() public emitItemTaskList = new EventEmitter();
                public addItemTaskListVar: string = "";                
                public addItemsInListTask(): void {                
                        this.addItemTaskListVar = this.addItemTaskListVar.trim();               
                        if (this.addItemTaskListVar) {                        
                                this.emitItemTaskList.emit(this.addItemTaskListVar); cima                        
                                this.addItemTaskListVar = "";
                        }
                }

        PAI: todo-list/componene HTML:
                <app-todo-input-add-itens (emitItemTaskList)="setEmitTaskList($event)"></app-todo-input-add-itens>
        PAI: todo-list/componene TS:
                public setEmitTaskList(event: string){                
                        this.taskList.push({task: event, checked: false});
                        console.log(event);
                }

## Linha de Comandos para criação de componentes da aplicação
        
        *** Interfaces
        ng g i /modules/home/model/TaskList

        *** Components

        *** Guards of the routers

        *** Sites com templates gratis livres para criar meus componentes
                - https://freehtml5.co/
                - https://colorlib.com/
                - https://html5up.net/
                - https://startbootstrap.com/
        *** Configuração de DNS apos o uso do comando ng build

                - (http://apptasklist.blackcode777.com/)

## INSTALAÇÕES 
        $ ng add angular-cli-ghpages