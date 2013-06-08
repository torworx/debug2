if ('undefined' == typeof window) {
  module.exports = require('./lib/debug2');
} else {
  module.exports = require('./debug2');
}
