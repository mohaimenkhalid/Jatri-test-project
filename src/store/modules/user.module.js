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
    SET_USERS(state, payload) {
        state.users = payload;
    },
    SET_LOADING(state, payload) {
        state.loading = payload;
    },
    SET_NEW_USER(state, payload){
        state.users = [...state.users, payload]
    }
}

const actions = {
    fetchUsersList({commit}) {
        commit("SET_LOADING", true)
        userService.getAllUsersList()
            .then(res=> {
                commit("SET_USERS", res)
                commit("SET_LOADING", false)
            })
    },

    async addNewUser(context, formData) {
        context.commit("SET_LOADING", true)
        await userService.addNewUser(formData)
            .then(res=> {
                context.commit("SET_NEW_USER", res)
                context.commit("SET_LOADING", false)
            })
    },

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
