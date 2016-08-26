import {provide, enableProdMode} from '@angular/core';
import {bootstrap} from '@angular/platform/browser';
import {
  ROUTER_PROVIDERS,
  HashLocationStrategy,
  LocationStrategy
} from '@angular/router';

import {MainApp} from './app/main';

enableProdMode();

bootstrap(MainApp, [
  ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
