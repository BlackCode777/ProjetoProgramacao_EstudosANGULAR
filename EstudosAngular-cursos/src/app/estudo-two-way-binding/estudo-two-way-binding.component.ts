import { Component, ContentChild, QueryList } from '@angular/core';

@Component({
        selector: 'app-estudo-two-way-binding',
        templateUrl: './estudo-two-way-binding.component.html',

        /* Querys no Angular */
        queries: {
                //conteudoQuerieChildren: new ContentChild(ChildNode)
        },

        styleUrls: ['./estudo-two-way-binding.component.css']
})
export class EstudoTwoWayBindingComponent {

        public conteudoQuerieChildren: QueryList<ChannelMergerOptions> | undefined;

        public nome: string = "Anderson";
        public filteredOptions: any;

        constructor( 
                //private masterFilesService: MasterFilesService
        ){}

        // this.masterFilesService.getItems('PL')
        // .subscribe(response => {
        //         this.items = response
        //         console.log(response)
        // });

        // this.filteredOptions = this.form.controls['profile2'].valueChanges.pipe(
        //         startWith(''),
        //         map(value => {
        //                 console.log('filter...')
        //                 const name = typeof value === 'string' ? value : value?.No;
        //                 return name ? this._filter(name as string) : this.items?.slice();
        //         }),
        // );

}
