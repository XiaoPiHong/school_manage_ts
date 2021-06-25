import Vue from 'vue'
import Vuex from 'vuex'
import VueModule from './Modules/VueModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    vueModule: VueModule
  }
})
