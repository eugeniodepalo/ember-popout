import { moduleFor, test } from 'ember-qunit';

moduleFor('service:popout-child', 'Unit | Service | popout child', {
  // Specify the other units that are required for this test.
  needs: ['service:window-messenger-client']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});
