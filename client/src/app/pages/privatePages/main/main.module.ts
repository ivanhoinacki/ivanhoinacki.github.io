import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { LibModule } from 'src/app/lib.module';

const PAGES_COMPONENTS = [
    MainComponent,
];

@NgModule({
  imports: [
    LibModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class MainModule {
}
