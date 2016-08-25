System.register(['angular2/core', '../cn-greeting/cn-greeting', '../cn-what/cn-what', '../cn-upcoming-talk/cn-upcoming-talk', '../cn-current-projects/cn-current-projects'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, cn_greeting_1, cn_what_1, cn_upcoming_talk_1, cn_current_projects_1;
    var HomeCmp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cn_greeting_1_1) {
                cn_greeting_1 = cn_greeting_1_1;
            },
            function (cn_what_1_1) {
                cn_what_1 = cn_what_1_1;
            },
            function (cn_upcoming_talk_1_1) {
                cn_upcoming_talk_1 = cn_upcoming_talk_1_1;
            },
            function (cn_current_projects_1_1) {
                cn_current_projects_1 = cn_current_projects_1_1;
            }],
        execute: function() {
            HomeCmp = (function () {
                function HomeCmp() {
                }
                HomeCmp.prototype.ngOnInit = function () {

                };
                HomeCmp.prototype.ngOnDestroy = function () {
                  
                };
                HomeCmp = __decorate([
                    core_1.Component({
                        selector: 'home',
                        templateUrl: 'app/components/home/home.html',
                        styleUrls: ['app/components/home/home.css'],
                        providers: [],
                        directives: [cn_greeting_1.CnGreeting, cn_what_1.CnWhat, cn_upcoming_talk_1.CnUpcomingTalk, cn_current_projects_1.CnCurrentProjects],
                        pipes: []
                    }),
                    __metadata('design:paramtypes', [])
                ], HomeCmp);
                return HomeCmp;
            })();
            exports_1("HomeCmp", HomeCmp);
        }
    }
});
//# sourceMappingURL=../../../../../app/components/home/home.js.map
