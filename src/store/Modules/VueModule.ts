import Store from '../../assets/Interface/Store'
const VueMudule = {
  state: () => ({
    count: 211
  }),
  mutations: {
    increaseCount(state: Store.VueStore, payload: any) {
      state.count += payload.num
    },
    asyncIncreaseCount(state: Store.VueStore, payload: any) {
      setTimeout(() => {
        state.count += payload.num
      }, 3000)
    }
  },
  actions: {
    increaseCount({ commit }: any, Data: any) {
      setTimeout(() => {
        commit('increaseCount', Data)
      }, 3000)
    }
  },
  getters: {//类似计算属性
    increaseCount(state: Store.VueStore) {
      return state.count + 1
    }
  }
}
export default VueMudule