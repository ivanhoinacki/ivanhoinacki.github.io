System.register(['@angular/core', '../../directive/highlight/highlight.directive'], function(exports_1, context_1) {
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
    var core_1, highlight_directive_1;
    var SocialMediaComp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            }],
        execute: function() {
            SocialMediaComp = (function () {
                function SocialMediaComp() {
                }
                SocialMediaComp = __decorate([
                    core_1.Component({
                        selector: 'social-media',
                        templateUrl: 'app/components/social-media/social-media.html',
                        styleUrls: ['app/components/social-media/social-media.css'],
                        providers: [],
                        directives: [highlight_directive_1.HighlightDirective],
                        pipes: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], SocialMediaComp);
                return SocialMediaComp;
            }());
            exports_1("SocialMediaComp", SocialMediaComp);
        }
    }
});

//# sourceMappingURL=social-media.comp.js.map
