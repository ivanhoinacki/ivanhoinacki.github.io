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
      document.querySelector('.loading').classList.add('hidden');
  }

  ngOnDestroy() {
    document.querySelector('.loading').classList.remove('hidden');
  }
}
