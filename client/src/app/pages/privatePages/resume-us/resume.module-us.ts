import { NgModule } from '@angular/core';

import { ResumeComponentUS } from './resume.component-us'
import { LibModule } from 'src/app/lib.module';

const PAGES_COMPONENTS = [
    ResumeComponentUS,
];

@NgModule({
  imports: [
    LibModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class ResumeModuleUS {
}
