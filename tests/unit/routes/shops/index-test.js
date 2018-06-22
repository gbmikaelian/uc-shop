import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | shops/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:shops/index');
    assert.ok(route);
  });
});
