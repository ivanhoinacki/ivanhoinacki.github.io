/* Avoid: 'error TS2304: Cannot find name <type>' during compilation */
///<reference path="../typings/index.d.ts"/>

import {bootstrap} from "@angular/platform-browser-dynamic";
import {provide, enableProdMode} from "@angular/core";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {ROUTER_PROVIDERS} from "@angular/router-deprecated";

import {IvanhoinackiApp} from './app/main';

enableProdMode();

bootstrap(IvanhoinackiApp, [
  ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
