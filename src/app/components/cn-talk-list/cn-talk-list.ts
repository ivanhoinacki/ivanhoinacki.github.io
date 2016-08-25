import {Component} from 'angular2/core';

import {CORE_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'cn-talk-list',
  templateUrl: 'app/components/cn-talk-list/cn-talk-list.html',
  styleUrls: ['app/components/cn-talk-list/cn-talk-list.css'],
  providers: [],
  directives: [CORE_DIRECTIVES],
  pipes: []
})
export class CnTalkList {
  talks;

  constructor() {
    this.talks = [
      {
        title: 'Angular 2 & the Single Immutable State Tree',
        time: 'Feb 18th - 2016, Amsterdam, Netherlands',
        slidedeck: 'https://speakerdeck.com/cironunes/angular-2-and-the-single-immutable-state-tree',
        photo: 'assets/talk-a2-sist.png'
      },
      {
        title: 'Upgrading from 1.x',
        time: 'Jan 20th - 2016, Belo Horizonte - MG, Brazil',
        slidedeck: 'https://speakerdeck.com/cironunes/upgrading-from-1-dot-x',
        photo: 'assets/talk-a2-upgrading.png'
      },
      {
        title: 'O que você precisa saber sobre o Angular 2',
        time: 'Nov 28th - 2015, Aracaju - AL, Brazil',
        slidedeck: 'https://speakerdeck.com/cironunes/o-que-voce-precisa-saber-sobre-o-angular-2',
        photo: 'assets/talk-a2-overview.png'
      },
      {
        title: 'Angular 2 e o futuro do desenvolvimento Frontend',
        time: 'Sep 23th - 2015, São Paulo - SP, Brazil',
        video: 'https://www.youtube.com/watch?v=2D5YjURb1jA',
        slidedeck: 'https://speakerdeck.com/cironunes/angular-2-e-o-futuro-do-desenvolvimento-front-end',
        photo: 'assets/talk-a2-future.png'
      },
      {
        title: 'O zen do Frontend com AngularJS',
        time: 'May 26th - 2015, Belo Horizonte - MG, Brazil',
        slidedeck: 'https://speakerdeck.com/cironunes/o-zen-do-front-end-com-angularjs',
        photo: 'assets/talk-ng-zen.png'
      },
      {
        title: 'The awesomeness of Angular 2',
        time: 'Apr 24th - 2015, Montevideo, Uruguay',
        video: 'https://www.youtube.com/watch?v=xth4tqj9vK0',
        slidedeck: 'https://speakerdeck.com/cironunes/the-awesomeness-of-angular-2',
        photo: 'assets/talk-a2-awesomeness.png'
      }
    ];
  }

}
