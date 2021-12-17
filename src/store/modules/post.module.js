import {postService} from "@/services";

const state = {
    posts: [],
    postDetails: null,
    loading: false
}

const getters = {
    getAllPosts(state) {
        return state.posts;
    },
}

const mutations = {
    SET_POSTS(state, payload) {
        state.posts = payload;
    },
    SET_LOADING(state, payload) {
        state.loading = payload;
    },
    SET_NEW_POST(state, payload){
        state.posts = [...state.posts, payload]
    },
    UPDATE_POST(state, payload){
        state.posts = state.posts.map(user => {
            if(user.id === payload.id) {
                return {...user, name: payload.name, email: payload.email, username: payload.username}
            }
            return user;
        })
    },
    DELETE_POST(state, id){
        state.posts = state.posts.filter(user => user.id !== id)
    },
    SET_POST_DETAILS(state, payload) {
        state.postDetails = payload
    }
}

const actions = {
    getPostByUser(context, userId) {
        context.commit("SET_LOADING", true)
        postService.getPostByUser(userId)
            .then(res => {
                context.commit("SET_POSTS", res)
                context.commit("SET_LOADING", false)
            })
    },

    fetchPostsList({commit}) {
        commit("SET_LOADING", true)
        postService.getAllPostsList()
            .then(res=> {
                commit("SET_POSTS", res)
                commit("SET_LOADING", false)
            })
    },

    async addNewUser(context, formData) {
        context.commit("SET_LOADING", true)
        await postService.addNewUser(formData)
            .then(res=> {
                context.commit("SET_NEW_POST", res)
                context.commit("SET_LOADING", false)
            })
    },

    async updateUser(context, formData) {
        context.commit("SET_LOADING", true)
        await postService.updateUser(formData)
            .then(() => {
                context.commit("UPDATE_POST", formData)
                context.commit("SET_LOADING", false)
            })
    },

    async deleteUser(context, id) {
        await postService.deleteUser(id)
            .then(() => {
                context.commit("DELETE_POST", id)
            })
    },

    async postDetailsInformation(context, userId) {
        context.commit("SET_LOADING", true)
        await postService.postDetails(userId)
            .then(res => {
                if(res.status !== 200) {
                    context.commit("SET_POST_DETAILS", null)
                } else {
                    context.commit("SET_POST_DETAILS", res.data)
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
