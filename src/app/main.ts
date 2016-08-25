import {Component} from 'angular2/core';
import {RouteConfig, Route, ROUTER_DIRECTIVES, OnActivate} from 'angular2/router';

import {HomeCmp} from './components/home/home';
import {TalksCmp} from './components/talks/talks';
import {TrainingCmp} from './components/training/training';

import {CnIcons} from './components/cn-icons/cn-icons';
import {CnLogo} from './components/cn-logo/cn-logo';
import {CnSocialMedia} from './components/cn-social-media/cn-social-media';

@Component({
  selector: 'main-app',
  providers: [],
  templateUrl: 'app/main.html',
  directives: [ROUTER_DIRECTIVES, CnIcons, CnLogo, CnSocialMedia],
  pipes: []
})
@RouteConfig([
  new Route({ path: '/', component: HomeCmp, name: 'HomeCmp' }),
  new Route({ path: '/talks', component: TalksCmp, name: 'TalksCmp' }),
  new Route({ path: '/training', component: TrainingCmp, name: 'TrainingCmp' })
])
export class MainApp {
  inverseIcon: boolean = true;
  iconSize: string = 'small';
}
