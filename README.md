vue-ptero
----------

[![npm](https://img.shields.io/npm/v/vue-ptero.svg?maxAge=2592000)](https://www.npmjs.org/package/vue-ptero)
[![Build Status](https://travis-ci.org/emoji-gen/vue-ptero.svg?branch=master)](https://travis-ci.org/emoji-gen/vue-ptero)
[![dependencies Status](https://david-dm.org/emoji-gen/vue-ptero/status.svg)](https://david-dm.org/emoji-gen/vue-ptero)
[![devDependencies Status](https://david-dm.org/emoji-gen/vue-ptero/dev-status.svg)](https://david-dm.org/emoji-gen/vue-ptero?type=dev)

:deciduous_tree: The Vue binding for [ptero](https://github.com/emoji-gen/ptero)

## Requirements

- Vue 1.x or 2.x

## Getting started

```
$ npm install vue-ptero --save
```

```js
const Vue = require('Vue')
const VuePtero = require('vue-ptero')

Vue.use(VuePtero, { target: document.body })

new Vue({
  el: '#app',
  created() {
    // listen a custom event
    this.$ptero.on('event-xxx', e => {
      console.log(e.detail)
    })

    // emit a custom event
    this.$ptero.emit('event-xxx', { foo: 1 })
  },
})
```

## Example
First, try to build example projects.

```
$ git clone https://github.com/emoji-gen/vue-ptero.git
$ cd vue-ptero
$ yarn
$ yarn run example
```

## License
MIT &copy; [Emoji Generator](https://emoji-gen.ninja)
