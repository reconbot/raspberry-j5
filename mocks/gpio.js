var MockGpio =  module.exports = function (gpio, mode) {
  this.mode = mode;
};

MockGpio.prototype.direction = function () {
  return this.mode;
};

['writeSync', 'watch', 'readSync'].forEach(function (func) {
  MockGpio.prototype[func] = function () {};
});
