import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlgoritmosModule } from "./algoritmos/algoritmos.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecursaoAlgoritmosRecursivosModule } from './recursao-algoritmos-recursivos/recursao-algoritmos-recursivos.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AlgoritmosModule,
        RecursaoAlgoritmosRecursivosModule
    ]
})
export class AppModule { }
