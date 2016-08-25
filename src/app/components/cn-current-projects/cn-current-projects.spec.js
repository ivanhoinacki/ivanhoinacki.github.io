System.register(['angular2/testing', './cn-current-projects'], function(exports_1) {
    var testing_1, cn_current_projects_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (cn_current_projects_1_1) {
                cn_current_projects_1 = cn_current_projects_1_1;
            }],
        execute: function() {
            testing_1.describe('CnCurrentProjects Component', function () {
                testing_1.beforeEachProviders(function () { return []; });
                testing_1.it('should ...', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
                    return tcb.createAsync(cn_current_projects_1.CnCurrentProjects).then(function (fixture) {
                        fixture.detectChanges();
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=../../../../../app/components/cn-current-projects/cn-current-projects.spec.js.map