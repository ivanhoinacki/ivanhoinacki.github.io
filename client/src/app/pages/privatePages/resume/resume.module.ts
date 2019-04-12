import { NgModule } from '@angular/core';

import { ResumeComponent } from './resume.component';
import { LibModule } from 'src/app/lib.module';

const PAGES_COMPONENTS = [
    ResumeComponent,
];

@NgModule({
  imports: [
    LibModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class ResumeModule {
}
