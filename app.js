/* Avoid: 'error TS2304: Cannot find name <type>' during compilation */
///<reference path="../typings/index.d.ts"/>
System.register(['@angular/core', '@angular/platform/browser', '@angular/router', './app/main', './app/directive/highlight/highlight.directive'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, browser_1, router_1, main_1, highlight_directive_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (main_1_1) {
                main_1 = main_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            }],
        execute: function() {
            core_1.enableProdMode();
            browser_1.bootstrap(main_1.IvanhoinackiApp, [
                router_1.ROUTER_PROVIDERS,
                highlight_directive_1.HighlightDirective,
                core_1.provide(router_1.LocationStrategy, {
                    useClass: router_1.HashLocationStrategy
                })
            ]);
        }
    }
});

//# sourceMappingURL=app.js.map
