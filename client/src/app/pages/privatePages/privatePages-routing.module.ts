import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PrivatePagesComponent } from './privatePages.component';
import { MainComponent } from './main/main.component';
import { ResumeComponent } from './resume/resume.component';


const routes: Routes = [{
  path: '',
  component: PrivatePagesComponent,
  children: [
    { path: '', component: MainComponent },
    { path: 'resume', component: ResumeComponent },
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '**', redirectTo: 'page-not-found' }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivatePagesRoutingModule {
}
