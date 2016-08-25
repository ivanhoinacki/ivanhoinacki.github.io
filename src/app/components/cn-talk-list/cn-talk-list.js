System.register(['angular2/core', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var CnTalkList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            CnTalkList = (function () {
                function CnTalkList() {
                    this.talks = [
                        {
                            title: 'Angular 2 & the Single Immutable State Tree',
                            time: 'Feb 18th - 2016, Amsterdam, Netherlands',
                            slidedeck: 'https://speakerdeck.com/cironunes/angular-2-and-the-single-immutable-state-tree',
                            photo: 'assets/talk-a2-sist.png'
                        },
                        {
                            title: 'Upgrading from 1.x',
                            time: 'Jan 20th - 2016, Belo Horizonte - MG, Brazil',
                            slidedeck: 'https://speakerdeck.com/cironunes/upgrading-from-1-dot-x',
                            photo: 'assets/talk-a2-upgrading.png'
                        },
                        {
                            title: 'O que você precisa saber sobre o Angular 2',
                            time: 'Nov 28th - 2015, Aracaju - AL, Brazil',
                            slidedeck: 'https://speakerdeck.com/cironunes/o-que-voce-precisa-saber-sobre-o-angular-2',
                            photo: 'assets/talk-a2-overview.png'
                        },
                        {
                            title: 'Angular 2 e o futuro do desenvolvimento Frontend',
                            time: 'Sep 23th - 2015, São Paulo - SP, Brazil',
                            video: 'https://www.youtube.com/watch?v=2D5YjURb1jA',
                            slidedeck: 'https://speakerdeck.com/cironunes/angular-2-e-o-futuro-do-desenvolvimento-front-end',
                            photo: 'assets/talk-a2-future.png'
                        },
                        {
                            title: 'O zen do Frontend com AngularJS',
                            time: 'May 26th - 2015, Belo Horizonte - MG, Brazil',
                            slidedeck: 'https://speakerdeck.com/cironunes/o-zen-do-front-end-com-angularjs',
                            photo: 'assets/talk-ng-zen.png'
                        },
                        {
                            title: 'The awesomeness of Angular 2',
                            time: 'Apr 24th - 2015, Montevideo, Uruguay',
                            video: 'https://www.youtube.com/watch?v=xth4tqj9vK0',
                            slidedeck: 'https://speakerdeck.com/cironunes/the-awesomeness-of-angular-2',
                            photo: 'assets/talk-a2-awesomeness.png'
                        }
                    ];
                }
                CnTalkList = __decorate([
                    core_1.Component({
                        selector: 'cn-talk-list',
                        templateUrl: 'app/components/cn-talk-list/cn-talk-list.html',
                        styleUrls: ['app/components/cn-talk-list/cn-talk-list.css'],
                        providers: [],
                        directives: [common_1.CORE_DIRECTIVES],
                        pipes: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], CnTalkList);
                return CnTalkList;
            })();
            exports_1("CnTalkList", CnTalkList);
        }
    }
});
//# sourceMappingURL=../../../../../app/components/cn-talk-list/cn-talk-list.js.map