import {Component, OnInit} from "@angular/core";
import {RouteConfig, Route, RouterLink, ROUTER_DIRECTIVES} from "@angular/router-deprecated";

import {TaskListComponent} from "./todo/components/task-list.component";
import {AboutComponent} from "./components/about/comp.about";

import { HomeCmp } from "./components/home/comp.home";
import { ResumeCmp } from "./components/resume/comp.resume";

@Component({
    selector: "ivanhoinacki-app",
    templateUrl: "./app/app.html",
    directives: [TaskListComponent, AboutComponent, RouterLink, ROUTER_DIRECTIVES]
})

@RouteConfig([
  new Route({ path: '/', component: HomeCmp, name: 'HomeCmp' }),
  new Route({ path: '/talks', component: TaskListComponent, name: 'TaskList' }),
  new Route({ path: '/about', component: AboutComponent, name: 'About' }),
  new Route({ path: '/resume', component: ResumeCmp, name: 'Resume' })
])

export class AppComponent implements OnInit {
    ngOnInit() {
        console.log("Application component initialized ...");
    }
}
