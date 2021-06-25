import Store from '../../assets/Interface/Store'
const VueMudule = {
  state: () => ({
    count: 211
  }),
  mutations: {},
  actions: {},
  getters: {//类似计算属性
    increaseCount(state: Store.VueStore) {
      return state.count + 1
    }
  }
}
export default VueMudule