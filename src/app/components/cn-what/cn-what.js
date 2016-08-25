System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var CnWhat;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CnWhat = (function () {
                function CnWhat() {
                }
                CnWhat = __decorate([
                    core_1.Component({
                        selector: 'cn-what',
                        templateUrl: 'app/components/cn-what/cn-what.html',
                        styleUrls: ['app/components/cn-what/cn-what.css'],
                        providers: [],
                        directives: [],
                        pipes: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], CnWhat);
                return CnWhat;
            })();
            exports_1("CnWhat", CnWhat);
        }
    }
});
//# sourceMappingURL=../../../../../app/components/cn-what/cn-what.js.map