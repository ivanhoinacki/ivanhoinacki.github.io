import {provide, enableProdMode} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {
  ROUTER_PROVIDERS,
  HashLocationStrategy,
  LocationStrategy
} from 'angular2/router';

import {MainApp} from './app/main';

enableProdMode();

bootstrap(MainApp, [
  ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })
]);
