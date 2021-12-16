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
    UPDATE_USER(state, payload){
        console.log(payload)
        state.users = state.users.map(user => {
            if(user.id === payload.id) {
                return {...user, name: payload.name, email: payload.email, username: payload.username}
            }
            return user;
        })
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

    async updateUser(context, formData) {
        await userService.updateUser(formData)
            .then(() => {
                context.commit("UPDATE_USER", formData)
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
