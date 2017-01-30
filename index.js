'use strict'

var Ptero = require('ptero').Ptero

var VuePtero = {
  install: function (Vue, options) {
    if (options && options.target) {
      Vue.prototype.$ptero = new Ptero(options.target)
    } else {
      Vue.prototype.$ptero = new Ptero()
    }
  },
}

module.exports = VuePtero
