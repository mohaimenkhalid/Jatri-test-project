import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate";

import account from './modules/account.module';
import user from './modules/user.module';
import post from './modules/post.module';

const store = createStore({
    plugins: [createPersistedState()],
    modules: {
        account,
        user,
        post
    }
})

export default store;
