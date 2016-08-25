System.register(['angular2/testing', './cn-social-media'], function(exports_1) {
    var testing_1, cn_social_media_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (cn_social_media_1_1) {
                cn_social_media_1 = cn_social_media_1_1;
            }],
        execute: function() {
            testing_1.describe('CnSocialMedia Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(cn_social_media_1.CnSocialMedia).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=../../../../../app/components/cn-social-media/cn-social-media.spec.js.map