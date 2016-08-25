System.register(['angular2/core', '../cn-talk-list/cn-talk-list', '../cn-talk-featured/cn-talk-featured', '../cn-talk-invite/cn-talk-invite'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, cn_talk_list_1, cn_talk_featured_1, cn_talk_invite_1;
    var TalksCmp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cn_talk_list_1_1) {
                cn_talk_list_1 = cn_talk_list_1_1;
            },
            function (cn_talk_featured_1_1) {
                cn_talk_featured_1 = cn_talk_featured_1_1;
            },
            function (cn_talk_invite_1_1) {
                cn_talk_invite_1 = cn_talk_invite_1_1;
            }],
        execute: function() {
            TalksCmp = (function () {
                function TalksCmp() {
                }
                TalksCmp.prototype.ngOnInit = function () {
                    document.querySelector('.cn-loading').classList.add('cn-hidden');
                };
                TalksCmp.prototype.ngOnDestroy = function () {
                    document.querySelector('.cn-loading').classList.remove('cn-hidden');
                };
                TalksCmp = __decorate([
                    core_1.Component({
                        selector: 'talks',
                        templateUrl: 'app/components/talks/talks.html',
                        styleUrls: ['app/components/talks/talks.css'],
                        providers: [],
                        directives: [cn_talk_list_1.CnTalkList, cn_talk_featured_1.CnTalkFeatured, cn_talk_invite_1.CnTalkInvite],
                        pipes: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], TalksCmp);
                return TalksCmp;
            })();
            exports_1("TalksCmp", TalksCmp);
        }
    }
});
//# sourceMappingURL=../../../../../app/components/talks/talks.js.map