<template>
  <UserInformation />
  <Posts />
  <Todos />
</template>

<script>
  import UserInformation from "../../components/user/Details"
  import Posts from "@/components/user/Posts";
  import Todos from "@/components/user/Todos";
  export default {
    name: 'UserDetails',
    components: {
      Todos,
      Posts,
      UserInformation
    },
    data() {
      return {

      }
    },
  }
</script>
