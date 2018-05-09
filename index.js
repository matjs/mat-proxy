var minimist    = require('minimist')
var argv        = minimist(process.argv.slice(2))

function proxy(opts = {}) {
  return function *proxy(next) {
    this.proxyPass = argv.d || argv.o || opts.proxyPass
    yield next
  }
}

module.exports = proxy