import {Component, OnInit, OnDestroy} from 'angular2/core';

import {CnTalkList} from '../cn-talk-list/cn-talk-list';
import {CnTalkFeatured} from '../cn-talk-featured/cn-talk-featured';
import {CnTalkInvite} from '../cn-talk-invite/cn-talk-invite';

@Component({
  selector: 'talks',
  templateUrl: 'app/components/talks/talks.html',
  styleUrls: ['app/components/talks/talks.css'],
  providers: [],
  directives: [CnTalkList, CnTalkFeatured, CnTalkInvite],
  pipes: []
})
export class TalksCmp implements OnInit, OnDestroy {
  
  ngOnInit() {
    document.querySelector('.cn-loading').classList.add('cn-hidden');
  }
  
  ngOnDestroy() {
    document.querySelector('.cn-loading').classList.remove('cn-hidden');
  }
  
}
