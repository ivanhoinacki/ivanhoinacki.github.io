import {Component, OnInit   } from '@angular/core';
import {RouteConfig,
        Route,
        RouterLink,
        ROUTER_DIRECTIVES   } from '@angular/router-deprecated';


import { HomeCmp        } from './components/home/comp.home';
import { AboutComponent } from './components/about/comp.about';
import { ResumeCmp      } from './components/resume/comp.resume';

@Component({
    selector: "ivanhoinacki-app",
    templateUrl: "./app/app.html",
    styleUrls: ['./app/app.css'],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    new Route({ path: '/', component: HomeCmp, name: 'HomeCmp' }),
    new Route({ path: '/about', component: AboutComponent, name: 'About' }),
    new Route({ path: '/resume', component: ResumeCmp, name: 'Resume' })
])

export class AppComponent implements OnInit {

    ngOnInit() {
        console.log("@ivanhoinacki initialized...");
    }
}
