import { ModuleWithProviders, NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextMaskModule } from 'angular2-text-mask';
import { SatDatepickerModule, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from 'saturn-datepicker';
import { DateAdapter as DateAdapterSaturn } from 'saturn-datepicker';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import localePr from '@angular/common/locales/pt';
registerLocaleData(localePr);


const NODE_MODULE = [
  CommonModule,
  FormsModule,
  SatDatepickerModule,
  TextMaskModule,
  ReactiveFormsModule,
  NgbModule
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
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    {provide: DateAdapterSaturn, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
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
