import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './notFound/notFound.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    { path: '', loadChildren: './privatePages/privatePages.module#PrivatePagesModule' },
    { path: 'page-not-found', component: NotFoundComponent, },
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: '**', redirectTo: 'page-not-found' }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
