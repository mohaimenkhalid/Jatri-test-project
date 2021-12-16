import {userService} from "@/services";

const state = {
    users: [],
    loading: false
}

const getters = {
    getAllUsers(state) {
        return state.users;
    },
}

const mutations = {
    SET_USERS(state, data) {
        state.users = data;
    },
    SET_LOADING(state, payload) {
        state.loading = payload;
    },
}

const actions = {
    fetchUsersList({commit}) {
        commit("SET_LOADING", true)
        userService.getAllUsersList()
            .then(res=> {
                commit("SET_USERS", res)
            })
            .then(commit("SET_LOADING", false))
    },

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
