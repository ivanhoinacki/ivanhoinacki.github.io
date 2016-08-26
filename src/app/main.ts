import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Route, ROUTER_DIRECTIVES, OnActivate} from 'angular2/router';

import {HomeCmp} from './components/home/home';
import {ResumeCmp} from './components/resume/resume';


@Component({
    selector: 'main-app',
    providers: [],
    templateUrl: 'app/main.html',
    styleUrls: ['app/main.css'],
    directives: [ROUTER_DIRECTIVES],
    pipes: []
})

@RouteConfig([
    new Route({ path: '/', component: HomeCmp, name: 'HomeCmp' }),
    new Route({ path: '/resume', component: ResumeCmp, name: 'Resume' })
])

export class MainApp implements OnInit {

    public onClickOverlay() {
        $('#toggle').toggleClass('active');
        $('#overlay').toggleClass('open');
    }

    ngOnInit() {
        $('.description').typed({
            strings: [
                'web deev..', 'Frontend Engineer ;)'
            ],
            backDelay: 300,
            typeSpeed: 30
        });
        console.log("@ivanhoinacki initialized...");
    }

}
