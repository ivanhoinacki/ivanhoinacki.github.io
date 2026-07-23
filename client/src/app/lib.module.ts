import { ModuleWithProviders, NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import localePr from '@angular/common/locales/pt';
registerLocaleData(localePr);


const NODE_MODULE = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule
];

import {
  IconsModule,
  SocialMediaModule
} from './comp/components';

const COMPONENTS = [
  IconsModule,
  SocialMediaModule
];

@NgModule({
  imports: [...NODE_MODULE, ...COMPONENTS],
  exports: [...NODE_MODULE, ...COMPONENTS],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ]
})
export class LibModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LibModule,
    };
  }
  constructor() {

  }
}
