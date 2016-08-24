import {Component, OnInit} from "@angular/core";
import {RouteConfig, Route, RouterLink, ROUTER_DIRECTIVES} from "@angular/router-deprecated";

import {TaskListComponent} from "./todo/components/task-list.component";
import {AboutComponent} from "./components/about/comp.about";

import { HomeCmp } from "./components/home/comp.home";
import { ResumeCmp } from "./components/resume/comp.resume";

import {IconsComp} from './directives/icons/direc.icons';
import {LogoComp} from './directives/logo/direc.logo';
import {SocialMediaComp} from './directives/social-media/direct.social-media';

@Component({
    selector: "ivanhoinacki-app",
    templateUrl: "./app/app.html",
    styleUrls: ['./app/app.css'],
    directives: [ROUTER_DIRECTIVES, IconsComp, LogoComp, SocialMediaComp]
})

@RouteConfig([
    new Route({ path: '/', component: HomeCmp, name: 'HomeCmp' }),
    new Route({ path: '/talks', component: TaskListComponent, name: 'TaskList' }),
    new Route({ path: '/about', component: AboutComponent, name: 'About' }),
    new Route({ path: '/resume', component: ResumeCmp, name: 'Resume' })
])

export class AppComponent implements OnInit {

    inverseIcon: boolean = true;
    iconSize: string = 'small';

    ngOnInit() {
        console.log("Application component initialized ...");
    }
}
