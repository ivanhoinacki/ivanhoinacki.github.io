System.register(['angular2/testing', './cn-logo'], function(exports_1) {
    var testing_1, cn_logo_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (cn_logo_1_1) {
                cn_logo_1 = cn_logo_1_1;
            }],
        execute: function() {
            testing_1.describe('CnLogo Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(cn_logo_1.CnLogo).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=../../../../../app/components/cn-logo/cn-logo.spec.js.map