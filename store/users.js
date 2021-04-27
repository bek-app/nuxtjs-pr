export const state = () => ({
  users: [
    { id: 1, name: 'Maksat', balance: 0 },
    { id: 2, name: 'Sultan', balance: 0 },
    { id: 3, name: 'Esimkhan', balance: 0 },
    { id: 4, name: 'Erjan', balance: 0 },
    { id: 5, name: 'Islam', balance: 0 },
    { id: 6, name: 'Jandos', balance: 0 },
    { id: 7, name: 'Nurlan', balance: 0 },
    { id: 8, name: 'Erbol', balance: 1000 },
    { id: 9, name: 'Erman', balance: 100 },
    { id: 10, name: 'Saken', balance: 100 },
    { id: 11, name: 'Meirambek', balance: 100 },
  ],
})

export const mutations = {
  changeBalance(state, { name, balance }) {
    const user = state.users.find((user) => {
      return user.name === name
    })
    user.balance += balance
  },
}
