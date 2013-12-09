var sinon = require('sinon');
var MockGpio = require('./mock-gpio');
var describe = module.exports;

var pins = [
  {gpio: 1, digital: true},
  {gpio: 2, digital: true}
];

describe.setUp = function (cb) {
  this.writeSync = sinon.spy(MockGpio.prototype, 'writeSync');
  this.readSync = sinon.spy(MockGpio.prototype, 'readSync');
  this.hardware = new Hardware(pins, MockGpio);
  cb();
};

describe.tearDown = function (cb) {
  this.writeSync.restore();
  this.readSync.restore();
  cb();
};

describe['#createGpios'] = function (test) {
  var keys = Object.keys(this.hardware.gpio);

  test.expect(keys.length * 2);
  keys.forEach(function (gpio) {
    var instance = this.hardware.gpio[gpio];
    test.ok(instance.direction(), 'out');
    test.ok(this.writeSync.calledWith(0));
  }.bind(this));

  test.done();
};

describe['#setRead'] = function (test) {
  var pin = pins[0];
  this.hardware.setRead(pin);
  var instance = this.hardware.gpio[pin.gpio];
  test.ok(instance instanceof MockGpio);
  test.ok(instance.direction(), 'in');
  test.done();
};

describe['#setWrite'] = function (test) {
  var pin = pins[0];
  this.hardware.setWrite(pin);
  var instance = this.hardware.gpio[pin.gpio];
  test.ok(instance instanceof MockGpio);
  test.ok(instance.direction(), 'out');
  test.done();
};

describe['#write'] = function (test) {
  var pin = pins[0];
  this.hardware.setWrite(pin);
  var instance = this.hardware.gpio[pin.gpio];

  test.ok(this.writeSync.calledOn(instance));
  test.ok(this.writeSync.calledWith(0));

  test.done();
};

describe['#read'] = function (test) {
  var pin = pins[0];
  this.hardware.read(pin);
  var instance = this.hardware.gpio[pin.gpio];

  test.ok(this.readSync.calledOn(instance));
  test.done();
};