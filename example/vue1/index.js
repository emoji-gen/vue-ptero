'use strict'

var Vue      = require('vue')
var VuePtero = require('../../index.js')

Vue.use(VuePtero, { target: document.body })

new Vue({
  el: 'body',
  created: function () {
    this.$ptero.on('event-xxx', function () {
      console.log('event-xxx recenved!')
    })

    this.$ptero.emit('event-xxx')
  },
})
