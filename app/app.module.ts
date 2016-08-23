import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { IvanhoinackiApp } from '../app/components/ivanhoinacki';
import { routing }        from '../app/routing';

import { Resume } from '../app/components/resume/resume';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    IvanhoinackiApp,
    Resume
  ],
  bootstrap: [ IvanhoinackiApp ]
})

export class AppModule { }
