import { NgModule } from '@angular/core';

import { PrivatePagesComponent } from './privatePages.component';
import { PrivatePagesRoutingModule } from './privatePages-routing.module';
import { LibModule } from 'src/app/lib.module';
import { MainModule } from './main/main.module';
import { ResumeModuleUS } from './resume-us/resume.module-us';
// import { ResumeModulePT } from './resume-pt/resume.module-pt';

const PAGES_COMPONENTS = [
  PrivatePagesComponent,
];

@NgModule({
  imports: [
    PrivatePagesRoutingModule,
    LibModule,
    MainModule,
    ResumeModuleUS
    // ResumeModulePT,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PrivatePagesModule {
}
