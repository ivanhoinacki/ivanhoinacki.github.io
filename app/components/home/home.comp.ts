import {Component, OnInit, OnDestroy} from '@angular/core';
import {IconsComp} from '../icons/icons.comp';
import {SocialMediaComp} from '../social-media/social-media.comp';

@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.html',
  styleUrls: ['app/components/home/home.css'],
  providers: [],
  directives: [IconsComp, SocialMediaComp],
  pipes: []
})

export class HomeCmp implements OnInit, OnDestroy {

  ngOnInit() {
    $('.description').typed({
      strings: [
        'web deev..', 'Frontend Engineer ;)'
      ],
      backDelay: 300,
      typeSpeed: 30
    });
  }

  ngOnDestroy() { }

}
