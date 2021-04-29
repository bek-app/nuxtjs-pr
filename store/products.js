export const state = () => ({
  products: [
    { id: 1, name: 'Coca-cola', sum: 350 },
    { id: 2, name: 'Fanta', sum: 300 },
    { id: 3, name: 'Moxito', sum: 300 },
    { id: 4, name: 'Sprite', sum: 320 },
    { id: 5, name: 'Dizzy', sum: 310 },
    { id: 6, name: 'Gorilla', sum: 400 },
  ],
})

export const getters = {}
export const actions = {}

export const mutations = {
  addProduct(state, newData) {
    state.products.push(newData)
  },
  removeSum(state, id) {
    const findId = state.products.find((product) => {
      return product.id === id
    })
    state.products.splice(findId, 1)
  },
  changeSum(state, sum) {
    state.products.find((product) => {
      return product.sum === sum
    })
  },
}
