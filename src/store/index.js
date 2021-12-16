import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate";

import account from './modules/account.module';
import user from './modules/user.module';

const store = createStore({
    plugins: [createPersistedState()],
    modules: {
        account,
        user
    }
})

export default store;
