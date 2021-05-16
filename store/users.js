export const state = () => ({
  users: [
    { id: 1, name: 'ALex', balance: 1500 },
    { id: 2, name: 'Sergei', balance: 1000 },
    { id: 3, name: 'Almas', balance: 2000 },
    { id: 4, name: 'Maks', balance: 3000 },
  ],
})

export const mutations = {
  changeBalance(state, { userId, balance }) {
    const user = state.users.find((user) => {
      return user.id === userId
    })
    user.balance += balance
  },
  // setUsers(state, users) {
  //   state.users = users
  // },
}

// export const actions = {
//   async getUsers({ commit }) {
//     const users = await this.$axios
//       .$get('https://jsonplaceholder.typicode.com/users')
//       .catch((error) => {
//         console.log(error)
//       })

//     commit('setUsers', users)
//   },
