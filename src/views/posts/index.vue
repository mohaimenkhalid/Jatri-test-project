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
            <button class="btn btn-sm btn-primary" @click="editUserHandler(user)">Edit</button>
            <button class="btn btn-sm btn-danger" @click="onDelete(user.id)">Delete</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <UserAddModal
      :editable="editable"
      :selectedUser="selectedUser"
      v-show="visible"
      @close="closeModal"
  />
</template>

<script>
  import {mapActions, mapState, mapGetters} from 'vuex'
  import Loading from "@/components/Loading";
  import UserAddModal from "@/components/user/UserAddModal";
  export default {
    name: "PostList",
    components: {UserAddModal, Loading},
    data() {
      return {
        visible: false,
        editable: false,
        selectedUser: {}
      }
    },
    created() {
      this.fetchPostsList();
    },
    methods: {
      ...mapActions('post', ['fetchPostsList', 'deleteUser']),
      openModal(editable = false) {
        if(!editable) {
          this.selectedUser = {}
        }
        this.visible = true;
        this.editable = editable;
      },
      closeModal() {
        this.visible = false;
      },
      onDelete(id) {
        if (!confirm('Are you sure to delete?')) return false;
        this.deleteUser(id);
      },
      editUserHandler(user) {
        this.selectedUser = user
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
