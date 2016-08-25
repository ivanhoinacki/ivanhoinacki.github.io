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
import {CnTalkFeatured} from './cn-talk-featured';


describe('CnTalkFeatured Component', () => {

  beforeEachProviders(() => []);


  it('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(CnTalkFeatured).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
