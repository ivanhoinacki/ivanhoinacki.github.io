import {Directive, Component} from '@angular/core';
import { HighlightDirective } from '../../directive/highlight/highlight.directive';


@Component({
  selector: 'social-media',
  templateUrl: 'app/components/social-media/social-media.html',
  styleUrls: ['app/components/social-media/social-media.css'],
  providers: [],
  directives: [HighlightDirective],
  pipes: []
})

export class SocialMediaComp {
  constructor() { }
}
