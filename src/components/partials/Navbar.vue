<template>
  <header class="p-3 bg-danger text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <router-link to="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <h4>Jatri</h4>
        </router-link>
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><router-link to="/" class="nav-link px-2 text-white">Home</router-link></li>
          <li><router-link to="/users" class="nav-link px-2 text-white">User</router-link></li>
          <li><a href="#" class="nav-link px-2 text-white">Post</a></li>
          <li><router-link to="/albums" class="nav-link px-2 text-white">Album</router-link></li>
          <li><a href="#" class="nav-link px-2 text-white">About</a></li>
        </ul>
        <div class="text-end" v-if="isAuthenticate === true">
          <a @click="handleSubmit" type="button" class="btn btn-light me-2">Logout</a>
        </div>
        <div class="text-end" v-else>
          <router-link to="/login"  type="button" class="btn btn-light me-2">Login</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import {mapActions, mapState} from "vuex";

  export default {
    name: "Navbar",
    data() {
      return {

      }
    },
    computed: {
      ...mapState({
        isAuthenticate: state => state.account.isAuthenticate
      }),
    },
    methods: {
      ...mapActions('account', ['logout']),
      handleSubmit() {
        this.logout();
      }
    }
  }
</script>
