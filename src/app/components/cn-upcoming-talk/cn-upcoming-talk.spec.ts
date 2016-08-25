import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {CnUpcomingTalk} from './cn-upcoming-talk';


describe('CnUpcomingTalk Component', () => {

  beforeEachProviders(() => []);


  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(CnUpcomingTalk).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
