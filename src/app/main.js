System.register(['angular2/core', 'angular2/router', './components/home/home', './components/talks/talks', './components/training/training', './components/cn-icons/cn-icons', './components/cn-logo/cn-logo', './components/cn-social-media/cn-social-media'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_1, talks_1, training_1, cn_icons_1, cn_logo_1, cn_social_media_1;
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
            function (talks_1_1) {
                talks_1 = talks_1_1;
            },
            function (training_1_1) {
                training_1 = training_1_1;
            },
            function (cn_icons_1_1) {
                cn_icons_1 = cn_icons_1_1;
            },
            function (cn_logo_1_1) {
                cn_logo_1 = cn_logo_1_1;
            },
            function (cn_social_media_1_1) {
                cn_social_media_1 = cn_social_media_1_1;
            }],
        execute: function() {
            MainApp = (function () {
                function MainApp() {
                    this.inverseIcon = true;
                    this.iconSize = 'small';
                }
                MainApp = __decorate([
                    core_1.Component({
                        selector: 'main-app',
                        providers: [],
                        templateUrl: 'app/main.html',
                        directives: [router_1.ROUTER_DIRECTIVES, cn_icons_1.CnIcons, cn_logo_1.CnLogo, cn_social_media_1.CnSocialMedia],
                        pipes: []
                    }),
                    router_1.RouteConfig([
                        new router_1.Route({ path: '/', component: home_1.HomeCmp, name: 'HomeCmp' }),
                        new router_1.Route({ path: '/talks', component: talks_1.TalksCmp, name: 'TalksCmp' }),
                        new router_1.Route({ path: '/training', component: training_1.TrainingCmp, name: 'TrainingCmp' })
                    ]),
                    __metadata('design:paramtypes', [])
                ], MainApp);
                return MainApp;
            })();
            exports_1("MainApp", MainApp);
        }
    }
});
//# sourceMappingURL=../../../app/main.js.map
