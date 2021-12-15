import { createStore } from "vuex"
import account from './modules/account.module';

const store = createStore({
    modules: {
        account
    }
})

export default store;
