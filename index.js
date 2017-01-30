'use strict'

var Ptero = require('ptero')

var VuePtero = {
  install: function (Vue, options) {
    if (options.target) {
      Vue.prototype.$ptero = new Ptero(options.target)
    } else {
      Vue.prototype.$ptero = new Ptero()
    }
  },
}

module.exports = VuePtero
