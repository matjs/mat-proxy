# mat-proxy

[![npm version](https://badge.fury.io/js/mat-proxy.svg)](http://badge.fury.io/js/mat-proxy)

## Installation

```sh
npm install --save-dev mat-proxy
```

## Usage

```javascript
var mat   = require('mat')
var proxy = require('mat-proxy')

// 反向代理到指定的host上
mat.task('default', function () {
  mat.url([/\.json/])
    .use(proxy({
      proxyPass: 'your.proxy.host'
    }))
})
```

## Options

- `proxyPass`
  
  反向代理目标host，可以是域名（本地配置host），也可以直接ip地址