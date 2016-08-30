System.register(['@angular/core', '../icons/icons.comp', '../social-media/social-media.comp'], function(exports_1, context_1) {
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
    var core_1, icons_comp_1, social_media_comp_1;
    var HomeCmp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (icons_comp_1_1) {
                icons_comp_1 = icons_comp_1_1;
            },
            function (social_media_comp_1_1) {
                social_media_comp_1 = social_media_comp_1_1;
            }],
        execute: function() {
            HomeCmp = (function () {
                function HomeCmp() {
                }
                HomeCmp.prototype.ngOnInit = function () {
                    $('.description').typed({
                        strings: [
                            'web deev..', 'Frontend Engineer ;)'
                        ],
                        backDelay: 300,
                        typeSpeed: 30
                    });
                };
                HomeCmp.prototype.ngOnDestroy = function () { };
                HomeCmp = __decorate([
                    core_1.Component({
                        selector: 'home',
                        templateUrl: 'app/components/home/home.html',
                        styleUrls: ['app/components/home/home.css'],
                        providers: [],
                        directives: [icons_comp_1.IconsComp, social_media_comp_1.SocialMediaComp],
                        pipes: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeCmp);
                return HomeCmp;
            }());
            exports_1("HomeCmp", HomeCmp);
        }
    }
});

//# sourceMappingURL=home.comp.js.map
