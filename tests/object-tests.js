/*global suite, test, assert, remote */
suite('remote control object', function() {


  test('remote variable should reference an object', function () {
    assert.equal(typeof remote, 'object');
  });


  // {boolean} powerState
  test('should have powerState', function () {
    assert.equal(typeof remote.powerState, 'boolean');
  });


  // {number}  channel
  test('should have channel property', function () {
    assert.equal(typeof remote.channel, 'number');
  });


  // {number}  volume          0 - 100
  test('should have volume property', function () {
    assert.equal(typeof remote.volume, 'number');
  });


  // togglePower({boolean})
  test('should have togglePower method', function () {
    assert.equal(typeof remote.togglePower, 'function');
  });


  // setChannel({number})
  test('should have setChannel method', function () {
    assert.equal(typeof remote.setChannel, 'function');
  });

  // setVolume({number})
  test('should have setVolume method', function () {
    assert.equal(typeof remote.setVolume, 'function');
  });

});