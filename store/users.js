export const state = () => ({
  users: [
    { id: 1, name: 'Maksat', balance: 0 },
    { id: 2, name: 'Sultan', balance: 0 },
    { id: 3, name: 'Esimkhan', balance: 0 },
    { id: 4, name: 'Erjan', balance: 0 },
    { id: 5, name: 'Islam', balance: 0 },
    { id: 6, name: 'Jandos', balance: 0 },
    { id: 7, name: 'Nurlan', balance: 0 },
  ],
})

export const mutations = {
  changeBalance(state, { userId, balance }) {
    const user = state.users.find((user) => {
      return user.id === userId
    })
    user.balance += balance
  },
}
