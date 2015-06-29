function proxy(opts) {
  return function *proxy(next) {
    this.proxyPass = opts.proxyPass
    yield next
  }
}

module.exports = proxy