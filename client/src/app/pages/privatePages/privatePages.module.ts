import { NgModule } from '@angular/core';

import { PrivatePagesComponent } from './privatePages.component';
import { PrivatePagesRoutingModule } from './privatePages-routing.module';
import { LibModule } from 'src/app/lib.module';
import { MainModule } from './main/main.module';
import { ResumeModule } from './resume/resume.module';

const PAGES_COMPONENTS = [
  PrivatePagesComponent,
];

@NgModule({
  imports: [
    PrivatePagesRoutingModule,
    LibModule,
    MainModule,
    ResumeModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PrivatePagesModule {
}
