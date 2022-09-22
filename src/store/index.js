import { createStore } from 'vuex'
import users from '../data/users'
import mutations from './mutations'

const store = createStore({
  state: {
    users,
    usersData: users,
    currentSort: 'email',
    reverseSort: 1
  },

  mutations
})

export default store
