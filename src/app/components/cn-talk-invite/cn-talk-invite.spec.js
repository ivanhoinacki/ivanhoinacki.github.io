System.register(['angular2/testing', './cn-talk-invite'], function(exports_1) {
    var testing_1, cn_talk_invite_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (cn_talk_invite_1_1) {
                cn_talk_invite_1 = cn_talk_invite_1_1;
            }],
        execute: function() {
            testing_1.describe('CnTalkInvite Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(cn_talk_invite_1.CnTalkInvite).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=../../../../../app/components/cn-talk-invite/cn-talk-invite.spec.js.map