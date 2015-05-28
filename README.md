# mat-proxy

[![npm version](https://badge.fury.io/js/mat-proxy.svg)](http://badge.fury.io/js/mat-proxy)

## Installation

```sh
npm install --save-dev mat-proxy
```

## Usage

```javascript
var mat  = require('mat')
var rap  = require('mat-rap')
var proxy = require('mat-proxy')

// rap mock数据环境
mat.task('default', function () {
  mat.url([/\.json/])
    .use(rap({
      projectId: 'your rap project id'
    }))
})

// daily 数据接口环境
mat.task('daily', function () {
  mat.url([/\.json/])
    .use(proxy({
      proxyPass: 'your.proxy.host'
    }))
})
```

## Options

- `proxyPass`
  
  反向代理目标地址，可以是域名（本地配置host），也可以直接ip地址