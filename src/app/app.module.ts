import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { AttriComponent } from './attri/attri.component';
import { ClasbindingComponent } from './clasbinding/clasbinding.component';
import { StylebingComponent } from './stylebing/stylebing.component';
import { LoginComponent } from './login/login.component';
import { StrintComponent } from './strint/strint.component';
import { ImgComponent } from './img/img.component';
import { ProbindComponent } from './probind/probind.component';
import { ClassStyleComponent } from './class-style/class-style.component';
import { PipesComponent } from './pipes/pipes.component';
import { IfproComponent } from './ifpro/ifpro.component';
import { ForloopComponent } from './forloop/forloop.component';
import { SwitchComponent } from './switch/switch.component';
import { Switch2Component } from './switch2/switch2.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    AttriComponent,
    ClasbindingComponent,
    StylebingComponent,
    LoginComponent,
    StrintComponent,
    ImgComponent,
    ProbindComponent,
    ClassStyleComponent,
    PipesComponent,
    IfproComponent,
    ForloopComponent,
    SwitchComponent,
    Switch2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
