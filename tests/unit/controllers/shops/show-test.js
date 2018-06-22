import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | shops/show', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:shops/show');
    assert.ok(controller);
  });
});
