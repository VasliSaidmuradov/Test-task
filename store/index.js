export const state = () => ({
  users: null,
})

export const mutations = {
  SET_USERS: (state, payload) => state.users = payload
}

export const actions = {
  async fetchUsers(store) {
    try {
      const resp = await this.$axios.get('https://jsonplaceholder.typicode.com/users')
      console.log(resp.data)
      store.commit('SET_USERS', resp.data)
    } catch (error) {
      throw error
    }
  }
}

export const getters = {
  GET_USERS: state => state.users
}