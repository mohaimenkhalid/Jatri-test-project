<template>
  <div class="row mt-5">
    <div class="col-md-12">
      <h5>User posts list</h5>
      <div class="card">
        <div class="card-body">
          <Loading :loading="loading" />
          <table class="table" v-if="!loading">
            <thead>
              <tr>
                <td>SI#</td>
                <td>Title</td>
                <td>body</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(post, index) in getAllPosts" :key="post.id">
                <td>{{ index+1 }}</td>
                <td>{{ post.title }}</td>
                <td>{{ post.body }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import Loading from "@/components/Loading";

export default {
  name: "UserInformation",
  components: {Loading},
  created() {
    this.getPostByUser(this.$route.params.id)
  },
  methods: {
     ...mapActions('post', ['getPostByUser']),
  },
  computed: {
    ...mapState({
      loading: state => state.post.loading
    }),
    ...mapGetters('post', ['getAllPosts'])
  },
}
</script>
