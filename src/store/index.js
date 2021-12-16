import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate";

import account from './modules/account.module';

const store = createStore({
    plugins: [createPersistedState()],
    modules: {
        account
    }
})

export default store;
