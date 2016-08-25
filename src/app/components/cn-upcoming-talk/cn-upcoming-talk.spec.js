System.register(['angular2/testing', './cn-upcoming-talk'], function(exports_1) {
    var testing_1, cn_upcoming_talk_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (cn_upcoming_talk_1_1) {
                cn_upcoming_talk_1 = cn_upcoming_talk_1_1;
            }],
        execute: function() {
            testing_1.describe('CnUpcomingTalk Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(cn_upcoming_talk_1.CnUpcomingTalk).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=../../../../../app/components/cn-upcoming-talk/cn-upcoming-talk.spec.js.map