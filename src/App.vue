<template>
  <h1>Home Page</h1>
  <p>{{ name }}</p>
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
