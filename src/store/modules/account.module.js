import {userService} from "@/services";
import router from "@/router";

const state = {
    isAuthenticate: false,
    userinfo: null
}

const mutations = {
    LOGIN_SUCCESS(state, user) {
        state.isAuthenticate = true;
        state.userinfo = user;
    },

    LOGOUT(state) {
        state.isAuthenticate = false;
        state.userinfo = null;

    },
}

const actions = {
    login(context, formData) {
        userService.login(formData)
            .then(result => {
                if(result && result[0]) {
                    context.commit("LOGIN_SUCCESS", result[0])
                    router.push('/')
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
