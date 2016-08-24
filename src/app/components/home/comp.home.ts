import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './app/components/home/comp.home.html',
  styleUrls: ['./app/components/home/comp.home.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class HomeCmp implements OnInit, OnDestroy {

  ngOnInit() {
    // document.querySelector('.cn-loading').classList.add('cn-hidden');
  }

  ngOnDestroy() {
    // document.querySelector('.cn-loading').classList.remove('cn-hidden');
  }

}
