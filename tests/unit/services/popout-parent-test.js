import { moduleFor, test } from 'ember-qunit';

moduleFor('service:popout-parent', 'Unit | Service | popout parent', {
  // Specify the other units that are required for this test.
  needs: ['service:window-messenger-server']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});
