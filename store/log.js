export const state = () => ({
  items: [],
})

export const getters = {}
export const actions = {}

export const mutations = {
  addLog(state, logItem) {
    state.items.push(logItem)

    this.commit('users/changeBalance', {
      userId: logItem.userId,
      balance: logItem.sum,
    })
  },
}
