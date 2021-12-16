<template>
  <div v-if="loading" class="text-center">
    <i class="fa fa-spin fa-spinner"></i>
    Loading...
  </div>
</template>

<script>
  export default {
    name: 'Loading',
    props: ["loading"]
  }
</script>
