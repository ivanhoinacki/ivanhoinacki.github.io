System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var CnSocialMedia;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CnSocialMedia = (function () {
                function CnSocialMedia() {
                    this.inverse = false;
                    this.size = 'normal';
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], CnSocialMedia.prototype, "inverse", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], CnSocialMedia.prototype, "size", void 0);
                CnSocialMedia = __decorate([
                    core_1.Component({
                        selector: 'cn-social-media',
                        templateUrl: 'app/components/cn-social-media/cn-social-media.html',
                        styleUrls: ['app/components/cn-social-media/cn-social-media.css'],
                        providers: [],
                        directives: [],
                        pipes: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], CnSocialMedia);
                return CnSocialMedia;
            })();
            exports_1("CnSocialMedia", CnSocialMedia);
        }
    }
});
//# sourceMappingURL=../../../../../app/components/cn-social-media/cn-social-media.js.map