<template>
  <div class="card my-3">
    <div class="card-header d-flex justify-content-between">
      <h4>Posts List</h4>
      <button class="btn btn-danger" @click="openModal()">Add New Post</button>
    </div>
    <div class="card-body table-responsive">
      <Loading :loading="loading" />
      <table class="table table-hover" v-if="!loading">
        <thead class="table-light">
        <tr>
          <th>SI#</th>
          <th>Title</th>
          <th>Body</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(post, i) in getAllPosts" :key="post.id">
          <td>{{ i+1 }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
          <td class="d-flex justify-content-between">
            <router-link :to="`/posts/${post.id}`" class="btn btn-sm btn-info">View</router-link>
            <button class="btn btn-sm btn-primary" @click="editUserHandler(post)">Edit</button>
            <button class="btn btn-sm btn-danger" @click="onDelete(post.id)">Delete</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <postModal
      :editable="editable"
      :selectedPost="selectedPost"
      v-show="visible"
      @close="closeModal"
  />
</template>

<script>
  import {mapActions, mapState, mapGetters} from 'vuex'
  import Loading from "@/components/Loading";
  import postModal from "@/components/post/postModal";
  export default {
    name: "PostList",
    components: {postModal, Loading},
    data() {
      return {
        visible: false,
        editable: false,
        selectedPost: {}
      }
    },
    created() {
      this.fetchPostsList();
    },
    methods: {
      ...mapActions('post', ['fetchPostsList', 'deletePost']),
      openModal(editable = false) {
        if(!editable) {
          this.selectedPost = {}
        }
        this.visible = true;
        this.editable = editable;
      },
      closeModal() {
        this.visible = false;
      },
      onDelete(id) {
        if (!confirm('Are you sure to delete?')) return false;
        this.deletePost(id);
      },
      editUserHandler(post) {
        this.selectedPost = post
        this.openModal(true)
      }
    },
    computed: {
      ...mapState({
        loading: state => state.post.loading
      }),
      ...mapGetters('post', ['getAllPosts'])
    },
  }
</script>
