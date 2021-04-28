export const state = () => ({
  items: [
    {
      userId: null,
      start_time: null,
      pc: 'PC1',
      end_time: null,
      sum: null,
      busy: false,
    },
    {
      userId: null,
      start_time: null,
      pc: 'PC2',
      end_time: null,
      sum: null,
      busy: false,
    },
    {
      userId: null,
      start_time: null,
      pc: 'PC3',
      end_time: null,
      sum: null,
      busy: false,
    },
    {
      userId: null,
      start_time: null,
      pc: 'PC4',
      end_time: null,
      sum: null,
      busy: false,
    },
    {
      userId: null,
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
    // ps.userId = newData.userId
    // ps.busy = newData.busy
    // ps.end_time = newData.end_time
    // ps.start_time = newData.start_time
    // ps.sum = newData.sum
  },
}
