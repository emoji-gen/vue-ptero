var VuePtero = require('./index')

describe('index', function () {
  var Vue

  beforeEach(function () {
    Vue = function () { }
    Vue.use = function (plugin, options) {
      plugin.install(Vue, options)
    }
  })

  describe('install', function () {
    describe('without options', function () {
      it('should be able to emit and listen custom events', function () {
        Vue.use(VuePtero)

        var vm = new Vue()
        expect(vm.$ptero).to.be.ok

        var spy = chai.spy()
        vm.$ptero.on('event-xxx-1', spy)
        vm.$ptero.emit('event-xxx-1')
        expect(spy).to.have.been.called.once
      })
    })

    describe('with options', function () {
      it('should be able to emit and listen custom events', function () {
        Vue.use(VuePtero, { target: document.body })

        var vm = new Vue()
        expect(vm.$ptero).to.be.ok

        var spy = chai.spy()
        vm.$ptero.on('event-xxx-2', spy)
        vm.$ptero.emit('event-xxx-2')
        expect(spy).to.have.been.called.once
      })
    })
  })
})
