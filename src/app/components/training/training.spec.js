System.register(['angular2/testing', './training'], function(exports_1) {
    var testing_1, training_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (training_1_1) {
                training_1 = training_1_1;
            }],
        execute: function() {
            testing_1.describe('Training Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(training_1.TrainingCmp).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=../../../../../app/components/training/training.spec.js.map