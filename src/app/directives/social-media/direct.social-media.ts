import {Component, Input} from '@angular/core';

@Component({
  selector: 'social-media',
  templateUrl: './app/directives/social-media/direct.social-media.html',
  styleUrls: ['./app/directives/social-media/direct.social-media.css']
})

export class SocialMediaComp {

  @Input() inverse: boolean = false;
  @Input() size: string = 'normal';

  constructor() {}

}
