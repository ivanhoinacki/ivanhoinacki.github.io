import { NgModule } from '@angular/core';

import { ResumeComponentPT } from './resume.component-pt';
import { LibModule } from 'src/app/lib.module';

const PAGES_COMPONENTS = [
    ResumeComponentPT,
];

@NgModule({
  imports: [
    LibModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class ResumeModulePT {
}
