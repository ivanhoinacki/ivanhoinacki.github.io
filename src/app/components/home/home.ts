import {Component, OnInit, OnDestroy} from 'angular2/core';

import {CnGreeting} from '../cn-greeting/cn-greeting';
import {CnWhat} from '../cn-what/cn-what';
import {CnUpcomingTalk} from '../cn-upcoming-talk/cn-upcoming-talk';
import {CnCurrentProjects} from '../cn-current-projects/cn-current-projects';

@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.html',
  styleUrls: ['app/components/home/home.css'],
  providers: [],
  directives: [CnGreeting, CnWhat, CnUpcomingTalk, CnCurrentProjects],
  pipes: []
})
export class HomeCmp implements OnInit, OnDestroy {

  ngOnInit() {

  }

  ngOnDestroy() {

  }

}
