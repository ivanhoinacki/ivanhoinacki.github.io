import {Component} from '@angular/core';

import {SocialMediaComp} from '../social-media/direct.social-media';

@Component({
  selector: 'greeting',
  templateUrl: './app/directives/greeting/direct.greeting.html',
  styleUrls: ['./app/directives/greeting/direct.greeting.css'],
  providers: [],
  directives: [SocialMediaComp],
  pipes: []
})

export class GreetingComp {}
