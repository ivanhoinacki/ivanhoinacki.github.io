System.register(['angular2/testing', './talks'], function(exports_1) {
    var testing_1, talks_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (talks_1_1) {
                talks_1 = talks_1_1;
            }],
        execute: function() {
            testing_1.describe('Talks Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(talks_1.TalksCmp).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=../../../../../app/components/talks/talks.spec.js.map