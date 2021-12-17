import { userService} from "@/services";

const state = {
    users: [],
    todos: [],
    userDetails: null,
    loading: false
}

const getters = {
    getAllUsers(state) {
        return state.users;
    },
    getAllTodos(state) {
        return state.todos;
    },
}

const mutations = {
    SET_USERS(state, payload) {
        state.users = payload;
    },

    SET_TODOS(state, payload) {
        state.todos = payload;
    },
    SET_LOADING(state, payload) {
        state.loading = payload;
    },
    SET_NEW_USER(state, payload){
        state.users = [...state.users, payload]
    },
    UPDATE_USER(state, payload){
        state.users = state.users.map(user => {
            if(user.id === payload.id) {
                return {...user, name: payload.name, email: payload.email, username: payload.username}
            }
            return user;
        })
    },
    DELETE_USER(state, id){
        state.users = state.users.filter(user => user.id !== id)
    },
    SET_USER_DETAILS(state, payload) {
        state.userDetails = payload
    }
}

const actions = {
    async fetchUsersList({commit}) {
        commit("SET_LOADING", true)
        await userService.getAllUsersList()
            .then(res=> {
                commit("SET_USERS", res)
                commit("SET_LOADING", false)
            })
    },

    async getTodosByUser(context, userId) {
        await userService.getUserTodos(userId)
            .then(res => {
                context.commit("SET_TODOS", res)
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
        context.commit("SET_LOADING", true)
        await userService.updateUser(formData)
            .then(() => {
                context.commit("UPDATE_USER", formData)
                context.commit("SET_LOADING", false)
            })
    },

    async deleteUser(context, id) {
        await userService.deleteUser(id)
            .then(() => {
                context.commit("DELETE_USER", id)
            })
    },

    async userDetailsInformation(context, userId) {
        context.commit("SET_LOADING", true)
        await userService.userDetails(userId)
            .then(res => {
                if(res.status !== 200) {
                    context.commit("SET_USER_DETAILS", null)
                } else {
                    context.commit("SET_USER_DETAILS", res.data)
                }
                context.commit("SET_LOADING", false)
            })
    }

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
