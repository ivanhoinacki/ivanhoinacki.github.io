System.register(['angular2/testing', './cn-what'], function(exports_1) {
    var testing_1, cn_what_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (cn_what_1_1) {
                cn_what_1 = cn_what_1_1;
            }],
        execute: function() {
            testing_1.describe('CnWhat Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(cn_what_1.CnWhat).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=../../../../../app/components/cn-what/cn-what.spec.js.map