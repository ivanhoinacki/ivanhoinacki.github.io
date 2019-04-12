import { NgModule } from '@angular/core';
import { LibModule } from '../lib.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NotFoundModule } from './notFound/notFound.module';
import { MainModule } from './privatePages/main/main.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    LibModule,
    MainModule,
    NotFoundModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
