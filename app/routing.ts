import { Routes, RouterModule } from '@angular/router';

import { IvanhoinackiApp } from '../app/components/ivanhoinacki';
import { Resume        } from '../app/components/resume/resume';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: IvanhoinackiApp
  },
  {
    path: 'resume',
    component: Resume
  }
];


export const routing = RouterModule.forRoot(appRoutes);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
