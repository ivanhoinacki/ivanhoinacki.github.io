import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IvanhoinackiApp} from '../app/components/ivanhoinacki';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ IvanhoinackiApp ],
  bootstrap: [ IvanhoinackiApp ]
})

export class AppModule { }
