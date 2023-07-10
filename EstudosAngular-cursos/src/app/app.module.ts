import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleComponent } from './title/title.component';
import { DataBindingInterpolationComponent } from './data-binding-interpolation/data-binding-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EstudoTwoWayBindingComponent } from './estudo-two-way-binding/estudo-two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { EstudoNgClassCssComponent } from './estudo-ng-class-css/estudo-ng-class-css.component';
import { EstudoDiretivaNgForArraysComponent } from './estudo-diretiva-ng-for-arrays/estudo-diretiva-ng-for-arrays.component';
import { EstudoNgClassNgStyleComponent } from './estudo-ng-class-ng-style/estudo-ng-class-ng-style.component';
import { EstudoNgModelComponent } from './estudo-ng-model/estudo-ng-model.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
        declarations: [
                AppComponent,
                TitleComponent,
                DataBindingInterpolationComponent,
                PropertyBindingComponent,
                EstudoTwoWayBindingComponent,
                EstudoNgClassCssComponent,
                EstudoDiretivaNgForArraysComponent,
                EstudoNgClassNgStyleComponent,
                EstudoNgModelComponent,
                
        ],
        imports: [
                FormsModule,
                BrowserModule,
                AppRoutingModule,
                BrowserAnimationsModule,
                SharedModule
        ],
        exports:[FormsModule], /* Sempre que for criar  ou utilizar um módulo( ou módulo de outros componentes ) diferente do angular preciso exportar pra ele ficar visivel pra outras partes do app */
        providers: [],
        bootstrap: [AppComponent]
})
export class AppModule { }
