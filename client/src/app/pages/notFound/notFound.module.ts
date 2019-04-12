import { NgModule } from '@angular/core';
import { LibModule } from 'src/app/lib.module';
import { NotFoundComponent } from './notFound.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    LibModule,
    RouterModule
  ],
  declarations: [
    NotFoundComponent
  ],
})
export class NotFoundModule { }
