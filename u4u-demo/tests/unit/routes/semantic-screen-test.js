import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | semantic-screen', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:semantic-screen');
    assert.ok(route);
  });
});
