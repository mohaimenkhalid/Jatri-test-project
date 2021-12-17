import {postService} from "@/services";

const state = {
    posts: [],
    postCommentsList: [],
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
        state.posts = state.posts.map(post => {
            if(post.id == payload.id) {
                return {...post, title: payload.title, body: payload.body}
            }
            return post;
        })
    },
    DELETE_POST(state, id){
        state.posts = state.posts.filter(user => user.id !== id)
    },
    SET_POST_DETAILS(state, payload) {
        state.postDetails = payload
    },
    SET_POST_COMMENTS(state, payload) {
        state.postCommentsList = payload;
    },
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

    async addNewPost(context, formData) {
        await postService.addNewPost(formData)
            .then(res=> {
                context.commit("SET_NEW_POST", res)
            })
    },

    async updatePost(context, formData) {
        await postService.updatePost(formData)
            .then(() => {
                context.commit("UPDATE_POST", formData)
            })
    },

    async deleteUser(context, id) {
        await postService.deleteUser(id)
            .then(() => {
                context.commit("DELETE_POST", id)
            })
    },

    async postDetailsInformation(context, postId) {
        context.commit("SET_LOADING", true)
        await postService.postDetails(postId)
            .then(res => {
                if(res.status !== 200) {
                    context.commit("SET_POST_DETAILS", null)
                } else {
                    context.commit("SET_POST_DETAILS", res.data)
                }
                context.commit("SET_LOADING", false)
            })
    },

    async postComments(context, postId) {
        context.commit("SET_LOADING", true)
        postService.getPostComments(postId)
            .then(res => {
                context.commit("SET_POST_COMMENTS", res)
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
