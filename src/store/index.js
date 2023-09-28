import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: "I am from Vuex",
    users: [],
    currentPage: 1,
    itemsPerPage: 2,
    searchParam: '',
  },
  getters: {
    getUsers: (state) => state.users,
    totalPages: (state) => {
      return Math.ceil(state.users.length / state.itemsPerPage);
    },
    paginatedUsers: (state) => {
      const start = (state.currentPage - 1) * state.itemsPerPage;
      const end = start + state.itemsPerPage;
      return state.users.slice(start, end);
    },
    filteredUsers: (state) => {
      if (state.searchParam === '') {
        return state.users;
      } else {
        const searchParam = state.searchParam.toLowerCase();
        return state.users.filter((user) => {
          return JSON.stringify(user).toLowerCase().includes(searchParam);
        });
      }
    },  
  },
  mutations: {
    SET_MESSAGE(state, payload) {
      state.message = payload.message;
    },
    SET_USERS(state, payload) {
      state.users = payload;
    },
    SET_CURRENT_PAGE(state, page) {
      state.currentPage = page;
    },
    SET_SEARCH_PARAM(state, query) {
      state.searchParam = query;
    },
    SET_FILTERED_USERS(state, filteredUsers) {
      state.filteredUsers = filteredUsers;
    },
  },
  actions: {
    async fetchUsersData(context) {
      try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        context.commit('SET_USERS', users);
        context.dispatch('setSearchQuery', context.state.searchParam);
      } catch(error) {
        console.log(error);
      }
    },
    setPage(context, page) {
      context.commit('SET_CURRENT_PAGE', page);
    },
    setSearchQuery(context, query) {
      context.commit('SET_SEARCH_PARAM', query);
    },
  },
  modules: {
  }
})
