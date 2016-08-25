import {Component, Input} from 'angular2/core';


@Component({
  selector: 'cn-social-media',
  templateUrl: 'app/components/cn-social-media/cn-social-media.html',
  styleUrls: ['app/components/cn-social-media/cn-social-media.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class CnSocialMedia {
  @Input() inverse: boolean = false;
  @Input() size: string = 'normal';

  constructor() {}

}
