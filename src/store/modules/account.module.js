import {userService} from "@/services";
import router from "@/router";

const state = {
    isAuthenticate: false,
    userinfo: null,
    loginStatus: null
}

const mutations = {
    LOGIN_SUCCESS(state, user) {
        state.isAuthenticate = true;
        state.userinfo = user;
    },

    LOGIN_STATUS(state, payload) {
        state.loginStatus = payload;
    },

    LOGOUT(state) {
        state.isAuthenticate = false;
        state.userinfo = null;

    },
}

const actions = {
    login(context, formData) {
        context.commit("LOGIN_STATUS", null)
        userService.login(formData)
            .then(result => {
                if(result && result[0]) {
                    context.commit("LOGIN_SUCCESS", result[0])
                    context.commit("LOGIN_STATUS", true)
                    router.push('/')
                } else {
                    context.commit("LOGIN_STATUS", false)
                }
            })
    },
    logout({ commit }) {
        commit('LOGOUT');
    }

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
