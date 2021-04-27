export const state = () => ({
  items: [
    {
      user: null,
      start_time: null,
      pc: 'PC1',
      end_time: null,
      sum: null,
      busy: false,
    },
    {
      user: null,
      start_time: null,
      pc: 'PC2',
      end_time: null,
      sum: null,
      busy: false,
    },
    {
      user: null,
      start_time: null,
      pc: 'PC3',
      end_time: null,
      sum: null,
      busy: false,
    },
    {
      user: null,
      start_time: null,
      pc: 'PC4',
      end_time: null,
      sum: null,
      busy: false,
    },
    {
      user: null,
      start_time: null,
      pc: 'PC5',
      end_time: null,
      sum: null,
      busy: false,
    },
  ],
})

export const getters = {}
export const actions = {}
export const mutations = {
  closeTime({ state }, { ps, newData }) {
    Object.assign(ps, newData)
  },
  changePS({ state }, { ps, newData }) {
    Object.assign(ps, newData)
  },
}
