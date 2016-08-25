System.register(['angular2/core', '../cn-social-media/cn-social-media', '../../directives/cn-scroll'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, cn_social_media_1, cn_scroll_1;
    var CnGreeting;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cn_social_media_1_1) {
                cn_social_media_1 = cn_social_media_1_1;
            },
            function (cn_scroll_1_1) {
                cn_scroll_1 = cn_scroll_1_1;
            }],
        execute: function() {
            CnGreeting = (function () {
                function CnGreeting() {
                }
                CnGreeting = __decorate([
                    core_1.Component({
                        selector: 'cn-greeting',
                        templateUrl: 'app/components/cn-greeting/cn-greeting.html',
                        styleUrls: ['app/components/cn-greeting/cn-greeting.css'],
                        providers: [],
                        directives: [cn_social_media_1.CnSocialMedia, cn_scroll_1.CnScroll],
                        pipes: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], CnGreeting);
                return CnGreeting;
            })();
            exports_1("CnGreeting", CnGreeting);
        }
    }
});
//# sourceMappingURL=../../../../../app/components/cn-greeting/cn-greeting.js.map