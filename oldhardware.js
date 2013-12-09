var Gpio = require('onoff').Gpio;

var Hardware = function (pins, GpioClass) {
  this.pins = pins;
  this.Gpio = GpioClass || Gpio;
  this.gpio = {};
  this.createGpios();
};

module.exports = Hardware;

Hardware.prototype.createGpios = function () {
  this.pins.forEach(function (pin) {
    if (!pin.gpio) {
      return;
    }

    // Per StandardFirmata set to output digital 0
    if (pin.digital) {
      this.setWrite(pin);
      this.gpio[pin.gpio].writeSync(0);
    }
  }.bind(this));
};

Hardware.prototype.setRead = function (pin) {
  var gpio = this.gpio[pin.gpio];
  if (gpio && gpio.direction() === 'in') {
    return;
  }
  this.gpio[pin.gpio] = new this.Gpio(pin.gpio, 'in', 'both');
};

Hardware.prototype.setWrite = function (pin) {
  var gpio = this.gpio[pin.gpio];
  if (gpio && gpio.direction() === 'out') {
    return;
  }
  this.gpio[pin.gpio] = new this.Gpio(pin.gpio, 'out');
};

Hardware.prototype.write = function (pin, value) {
  var gpio = this.gpio[pin.gpio];
  return gpio && gpio.writeSync(value);
};

Hardware.prototype.read = function (pin) {
  var gpio = this.gpio[pin.gpio];
  return gpio && gpio.readSync();
};