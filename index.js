function proxy(opts) {
  return function *proxy(next) {
    this.url = this.url.replace(this.host, opts.proxyPass)
    yield next
  }
}

module.exports = proxy