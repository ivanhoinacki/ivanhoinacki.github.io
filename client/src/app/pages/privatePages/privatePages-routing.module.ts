import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PrivatePagesComponent } from './privatePages.component';
import { MainComponent } from './main/main.component';
// import { ResumeComponentPT } from './resume-pt/resume.component-pt';
import { ResumeComponentUS } from './resume-us/resume.component-us';

const routes: Routes = [{
  path: '',
  component: PrivatePagesComponent,
  children: [
    { path: '', component: MainComponent },
    // { path: 'resume-pt', component: ResumeComponentPT },
    { path: 'resume-us', component: ResumeComponentUS },
    // Remove o redirecionamento vazio, pois já está resolvido pela rota acima
    { path: '**', redirectTo: 'page-not-found' }  // Isso deve estar no final
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivatePagesRoutingModule {}
