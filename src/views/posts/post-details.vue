<template>
  <div class="row mt-3">
    <Loading :loading="loading" />
    <div class="col-md-12" v-if="!loading">
      <div>
        <div>
            <h3>{{ postDetails.title }}</h3>
            <p>{{ postDetails.body }}</p>
        </div>
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
