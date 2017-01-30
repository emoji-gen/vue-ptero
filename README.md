vue-ptero
----------

[![npm](https://img.shields.io/npm/v/vue-ptero.svg?maxAge=2592000&style=flat-square)](https://www.npmjs.org/package/vue-ptero)
[![Travis](https://img.shields.io/travis/emoji-gen/vue-ptero/master.svg?maxAge=2592000&style=flat-square&x)](https://travis-ci.org/emoji-gen/vue-ptero)
[![Dependency Status](https://img.shields.io/david/emoji-gen/vue-ptero.svg?maxAge=2592000&style=flat-square)](https://david-dm.org/emoji-gen/vue-ptero)
[![devDependency Status](https://img.shields.io/david/dev/emoji-gen/vue-ptero.svg?maxAge=2592000&style=flat-square)](https://david-dm.org/emoji-gen/vue-ptero?type=dev)

:deciduous_tree: The Vue binding for [ptero](https://github.com/emoji-gen/ptero)

## Requirements

- Vue 1.0 or 2.0

## Getting started

```
$ npm install vue-ptero --save
```

```js
const Vue      = require('Vue')
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
MIT @ [Emoji Generator](https://emoji.pine.moe)
