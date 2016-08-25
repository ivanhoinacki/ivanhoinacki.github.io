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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1;
    var CnScroll;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CnScroll = (function () {
                function CnScroll(el) {
                    this.el = el;
                }
                CnScroll.prototype.onClick = function (e) {
                    var targetId = this.el.nativeElement.href.match(/#.*/)[0];
                    var targetEl = document.querySelector(targetId);
                    var target = targetEl.getBoundingClientRect().top;
                    e.preventDefault();
                    this.smoothScrollTo(document.documentElement, target, 1e3);
                    this.smoothScrollTo(document.body, target, 1e3);
                };
                /**
                    Smoothly scroll element to the given target (element.scrollTop)
                    for the given duration
              
                    Returns a promise that's fulfilled when done, or rejected if
                    interrupted
                */
                CnScroll.prototype.smoothScrollTo = function (element, target, duration) {
                    target = Math.round(target);
                    duration = Math.round(duration);
                    if (duration < 0) {
                        return Promise.reject("bad duration");
                    }
                    if (duration === 0) {
                        element.scrollTop = target;
                        return Promise.resolve();
                    }
                    var start_time = Date.now();
                    var end_time = start_time + duration;
                    var start_top = element.scrollTop;
                    var distance = target - start_top;
                    // based on http://en.wikipedia.org/wiki/Smoothstep
                    function smoothStep(start, end, point) {
                        if (point <= start) {
                            return 0;
                        }
                        if (point >= end) {
                            return 1;
                        }
                        var x = (point - start) / (end - start); // interpolation
                        return x * x * (3 - 2 * x);
                    }
                    return new Promise(function (resolve, reject) {
                        // This is to keep track of where the element's scrollTop is
                        // supposed to be, based on what we're doing
                        var previous_top = element.scrollTop;
                        // This is like a think function from a game loop
                        function scrollFrame() {
                            if (element.scrollTop != previous_top) {
                                reject("interrupted");
                                return;
                            }
                            // set the scrollTop for this frame
                            var now = Date.now();
                            var point = smoothStep(start_time, end_time, now);
                            var frameTop = Math.round(start_top + (distance * point));
                            element.scrollTop = frameTop;
                            // check if we're done!
                            if (now >= end_time) {
                                resolve();
                                return;
                            }
                            // If we were supposed to scroll but didn't, then we
                            // probably hit the limit, so consider it done; not
                            // interrupted.
                            if (element.scrollTop === previous_top
                                && element.scrollTop !== frameTop) {
                                resolve();
                                return;
                            }
                            previous_top = element.scrollTop;
                            // schedule next frame for execution
                            setTimeout(scrollFrame, 0);
                        }
                        // boostrap the animation process
                        setTimeout(scrollFrame, 0);
                    });
                };
                CnScroll = __decorate([
                    core_1.Directive({
                        selector: '[cn-scroll]',
                        host: {
                            '(click)': 'onClick($event)'
                        }
                    }),
                    __param(0, core_1.Host()), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], CnScroll);
                return CnScroll;
            })();
            exports_1("CnScroll", CnScroll);
        }
    }
});
//# sourceMappingURL=../../../../app/directives/cn-scroll.js.map