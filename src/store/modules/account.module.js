import {userService} from "@/services";

const state = {

}

const actions = {
    login(context, formData) {
        userService.login(formData)
            .then(result => {
                console.log(result)
                if(result && result[0]) {
                    console.log(result)
                    context.commit("LOGIN_SUCCESS", result[0])
                }
            })
    },
}

const mutations = {
    LOGIN_SUCCESS(state, user) {
        state.status = {loggedIn: true};
        state.user = user;
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
