/* Avoid: 'error TS2304: Cannot find name <type>' during compilation */
///<reference path="../typings/index.d.ts"/>

import {provide, enableProdMode} from '@angular/core';
import {bootstrap} from '@angular/platform/browser';
import {ROUTER_PROVIDERS, HashLocationStrategy, LocationStrategy} from '@angular/router';
import {IvanhoinackiApp} from './app/main';

enableProdMode();

bootstrap(IvanhoinackiApp, [
  ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
