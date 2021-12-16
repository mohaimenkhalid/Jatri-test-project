<template>
  <div class="card my-3">
    <div class="card-header d-flex justify-content-between">
      <h4>User List</h4>
      <button class="btn btn-danger" @click="openModal()">Add New User</button>
    </div>
    <div class="card-body table-responsive">
      <table class="table table-hover">
        <thead class="table-light">
        <tr>
          <th>SI#</th>
          <th>Name</th>
          <th>Email</th>
          <th>username</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(user, i) in getAllUsers" :key="user.id">
          <td>{{ i+1 }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.username }}</td>
          <td class="d-flex justify-content-between">
            <router-link :to="`/users/${user.id}`" class="btn btn-sm btn-info">View</router-link>
            <button class="btn btn-sm btn-primary" @click="editUserHandler(user)">Edit</button>
            <button class="btn btn-sm btn-danger" @click="onDelete(user.id)">Delete</button>
          </td>
        </tr>
        </tbody>
      </table>
      <Loading :loading="loading" />
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
    name: "UserList",
    components: {UserAddModal, Loading},
    data() {
      return {
        visible: false,
        editable: false,
        selectedUser: {}
      }
    },
    created() {
      this.fetchUsersList();
    },
    methods: {
      ...mapActions('user', ['fetchUsersList', 'deleteUser']),
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
        loading: state => state.user.loading
      }),
      ...mapGetters('user', ['getAllUsers'])
    },
  }
</script>
