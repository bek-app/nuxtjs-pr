export const state = () => ({
  items: [],
})

export const getters = {}
export const actions = {}

export const mutations = {
  addSelected(state, newData) {
    state.items.push(newData)
    this.commit('users/changeBalance', {
      userId: newData.userId,
      balance: newData.sum,
    })
  },
}
