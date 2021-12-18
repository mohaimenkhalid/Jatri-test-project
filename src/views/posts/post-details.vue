<template>
  <div class="row mt-3">
    <Loading :loading="loading" />
    <div class="col-md-12" v-if="!loading">
      <Card>
        <template #header>
          <img alt="user header" src="https://primefaces.org/primevue/showcase/demo/images/usercard.png" height="200">
        </template>
        <template #title>
          <h3>{{ postDetails.title }}</h3>
        </template>
        <template #content>
          {{ postDetails.body }}
        </template>
        <template #footer>
        </template>
      </Card>
      <div>
        <CommentLists
            :comments="postCommentsList"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import CommentLists from "@/components/post/CommentsList";
import Loading from "@/components/Loading";

export default {
    name: "postDetails",
  components: {Loading, CommentLists},
  data(){
      return {

      }
    },created() {
    this.postDetailsInformation(this.$route.params.id)
    this.postComments(this.$route.params.id)
  },
  methods: {
    ...mapActions('post', ['postDetailsInformation', 'postComments']),
  },
  computed: {
    ...mapState({
      loading: state => state.post.loading,
      postDetails: state => state.post.postDetails,
      postCommentsList: state => state.post.postCommentsList,
    }),
  },
}
</script>
