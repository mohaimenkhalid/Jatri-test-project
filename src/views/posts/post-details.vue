<template>
  <div class="row mt-3">
    <div class="col-md-12">
      <div class="">
        <div class="">
            <h3>{{ postDetails.title }}</h3>
            <p>{{ postDetails.body }}</p>
        </div>
      </div>

      <CommentLists
        :comments="postCommentsList"
      />
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import CommentLists from "@/components/post/CommentsList";

export default {
    name: "postDetails",
  components: {CommentLists},
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
