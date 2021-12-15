<template>
  <router-view />
</template>

<script>
import { mapState } from "vuex"
export default {
  name: 'App',
  components: {

  },
  computed: {
    ...mapState("account", ["name"]),
  }
}
</script>

<style>
</style>
