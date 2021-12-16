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
    },
    DELETE_USER(state, id){
        state.users = state.users.filter(user => user.id !== id)
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

    async deleteUser(context, id) {
        await userService.deleteUser(id)
            .then(() => {
                context.commit("DELETE_USER", id)
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
