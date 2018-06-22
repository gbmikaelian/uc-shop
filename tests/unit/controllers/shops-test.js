import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | shops', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:shops');
    assert.ok(controller);
  });
});
