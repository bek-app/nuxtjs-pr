export const state = () => ({
  users: [],
})

export const mutations = {
  changeBalance(state, { userId, balance }) {
    const user = state.users.find((user) => {
      return user.id === userId
    })
    user.balance += balance
  },
  setUsers(state, users) {
    state.users = users
  },
}

export const actions = {
  async getUsers({ commit }) {
    const users = await this.$axios
      .$get('https://jsonplaceholder.typicode.com/users')
      .catch((error) => {
        console.log(error)
      })

    commit('setUsers', users)
  },
}
