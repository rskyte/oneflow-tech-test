// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { EventBus } from './bus.js'
// import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  // router,
  components: { App },
  template: '<App/>'
})

function onHashChange () {
  var _visibility = window.location.hash.replace(/#\/?/, '')
  if (vm.$options.components.App.methods[_visibility]) {
    EventBus.$emit('visibilityChange', _visibility)
  } else {
    window.location.hash = ''
    EventBus.$emit('visibilityChange', 'all')
  }
}

window.addEventListener('hashchange', onHashChange)
onHashChange()
