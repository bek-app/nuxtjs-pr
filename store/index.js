export const state = () => ({
  users: [],
})
export const getters = {}
export const actions = {
  async getUers() {
    const users = await this.$axios.$get('http://icanhazip.com')

    this.$store.commit('addUsers', users)
    return users
  },
}
export const mutations = {
  addUsers(state, users) {
    state.users.push({ ...users })
  },
}
