var minimist    = require('minimist')
var argv        = minimist(process.argv.slice(2))

function proxy(opts = {}) {
  return function *proxy(next) {
    this.protocolAlias = opts.protocolAlias
    this.proxyPass = opts.proxyPass || argv.d || argv.o
    this.rapProjectId = opts.projectId
    yield next
  }
}

module.exports = proxy