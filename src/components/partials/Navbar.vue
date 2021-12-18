<template>
  <Menubar :model="items">
    <template #start>
      <h3 class="logo">
        <router-link to="/">
          Jatri
        </router-link>
      </h3>
    </template>
    <template #item="{item}" class="nav">
      <router-link :to="item.url"  type="button" class="me-2">
        <i :class="item.icon"></i>
        {{item.label}}
      </router-link>
    </template>
    <template #end>
      <div class="text-end" v-if="isAuthenticate === true">
        <a @click="handleSubmit" type="button" class="btn btn-light me-2">
          <i class="pi pi-sign-out"></i>
          Logout</a>
      </div>
      <div class="text-end" v-else>
        <router-link to="/login"  type="button" class="me-2">
          <i class="pi pi-sign-in"></i>
          Login
        </router-link>
      </div>
    </template>
  </Menubar>
</template>

<script>
import {mapActions, mapState} from "vuex";

  export default {
    name: "Navbar",
    data() {
      return {
        items: [
          {
            label:'Home',
            icon:'pi pi-home',
            url:'/'
          },
          {
            label:'Post',
            icon:'pi pi-home',
            url:'/posts'
          },
          {
            label:'User',
            icon:'pi pi-home',
            url:'/users'
          },
          {
            label:'Albums',
            icon:'pi pi-home',
            url:'/albums'
          }
        ]
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

<style>
.p-menubar{
  padding: 0.5rem;
  background: #F04935 !important;
  color: #495057;
  border: 0 !important;
  border-radius: 0 !important;
}
.p-menubar .p-menuitem {
  position: relative;
  padding: 1rem;
}
.p-menubar a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
}

i.pi-bars {
  font-size: 25px;
  color: #fff;
}

@media screen and (max-width: 960px) {
  .p-menubar .p-menubar-root-list {
    background: #f96a6a !important;
  }
  .logo {
    display: none;
  }
}

</style>
