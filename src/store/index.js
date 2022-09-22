import { createStore } from 'vuex'
import users from '../data/users'

const store = createStore({
  state: {
    users,
    usersData: users,
    currentSort: 'email',
    reverseSort: 1
  },

  mutations: {
    // Поиск пользователей по email, first_name, last_name и username
    SEARCH_USERS (state, param) {
      state.usersData = state.users.filter(
        el =>
          el.email.toUpperCase().includes(param.toUpperCase()) ||
          el.first_name.toUpperCase().includes(param.toUpperCase()) ||
          el.last_name.toUpperCase().includes(param.toUpperCase()) ||
          el.username.toUpperCase().includes(param.toUpperCase())
      )
    },

    // Сортировка таблицы по алфавиту
    SORT_USERS (state, param) {
      state.currentSort == param
        ? (state.reverseSort *= -1)
        : (state.currentSort = param)

      state.usersData = state.usersData.sort((a, b) => {
        if (a[param] < b[param]) return -1 * state.reverseSort
        if (a[param] > b[param]) return 1 * state.reverseSort
        return 0
      })
    },

    // Добавление нового пользователя
    ADD_USER (state, param) {
      param.id = new Date()
      state.users.push({ ...param })
    }
  }
})

export default store
