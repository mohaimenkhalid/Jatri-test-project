import store from "@/store";

const guestGuard = async (to, from, next) => {
    if (!store.state.account.isAuthenticate) {
        next();
    } else {
        next('/'); // all is fine
    }
}

export default guestGuard;
