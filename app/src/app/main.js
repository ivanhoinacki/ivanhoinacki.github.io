System.register(['@angular/core', '@angular/router', './components/home/home', './components/resume/resume'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_1, resume_1;
    var MainApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (resume_1_1) {
                resume_1 = resume_1_1;
            }],
        execute: function() {
            MainApp = (function () {
                function MainApp() {
                }
                MainApp.prototype.onClickOverlay = function () {
                    $('#toggle').toggleClass('active');
                    $('#overlay').toggleClass('open');
                };
                MainApp.prototype.ngOnInit = function () {
                    $('.description').typed({
                        strings: [
                            'web deev..', 'Frontend Engineer ;)'
                        ],
                        backDelay: 300,
                        typeSpeed: 30
                    });
                    console.log("@ivanhoinacki initialized...");
                };
                MainApp = __decorate([
                    core_1.Component({
                        selector: 'main-app',
                        providers: [],
                        templateUrl: 'app/main.html',
                        styleUrls: ['app/main.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        pipes: []
                    }),
                    router_1.RouteConfig([
                        new router_1.Route({ path: '/', component: home_1.HomeCmp, name: 'HomeCmp' }),
                        new router_1.Route({ path: '/resume', component: resume_1.ResumeCmp, name: 'Resume' })
                    ]), 
                    __metadata('design:paramtypes', [])
                ], MainApp);
                return MainApp;
            }());
            exports_1("MainApp", MainApp);
        }
    }
});
//# sourceMappingURL=main.js.map