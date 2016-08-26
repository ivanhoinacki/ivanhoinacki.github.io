import {Component, OnInit, OnDestroy} from 'angular2/core';


@Component({
    selector: 'home',
    templateUrl: 'app/components/home/home.html',
    styleUrls: ['app/components/home/home.css'],
    providers: [],
    directives: [],
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
