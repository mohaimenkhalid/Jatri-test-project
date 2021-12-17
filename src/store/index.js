import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate";

import account from './modules/account.module';
import user from './modules/user.module';
import post from './modules/post.module';
import albums from './modules/album.module';

const store = createStore({
    plugins: [createPersistedState()],
    modules: {
        account,
        user,
        post,
        albums
    }
})

export default store;
