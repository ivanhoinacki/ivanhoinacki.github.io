import {Component, OnInit} from "@angular/core";
import {RouteConfig, Route, RouterLink, ROUTER_DIRECTIVES} from "@angular/router-deprecated";

import {HomeCmp} from './components/home/home.component';
import {ResumeCmp} from './components/resume/resume.component';

@Component({
    selector: "ivanhoinacki",
    templateUrl: "./app/app.html",
    styleUrls: ['./app/app.css'],
    directives: [RouterLink, ROUTER_DIRECTIVES]
})

@RouteConfig([
    new Route({ path: '/', component: HomeCmp, name: 'HomeCmp' }),
    new Route({ path: '/resume', component: ResumeCmp, name: 'Resume' })
])

export class IvanhoinackiApp implements OnInit {

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
