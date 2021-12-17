<template>
  <div class="card my-3">
    <div class="card-header d-flex justify-content-between">
      <h4>User List</h4>
      <button class="btn btn-danger" @click="openModal()">Add New User</button>
    </div>
    <div class="card-body table-responsive">

      <DataTable :value="getAllUsers" :paginator="true" class="p-datatable-customers" :rows="4"
                 dataKey="id" v-model:filters="userFilter" filterDisplay="row" :loading="loading1" responsiveLayout="scroll"
      >
        <template #empty>
          No Data found.
        </template>
        <template #loading>
          Loading data. Please wait.
        </template>
        <Column field="name" header="Name" style="min-width:12rem">
          <template #body="{data}">
            {{data.name}}
          </template>
          <template #filter="{filterModel,filterCallback}">
            <InputText type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" placeholder="Search by name " />
          </template>
        </Column>
        <Column field="email" header="Email" style="min-width:12rem">
          <template #body="{data}">
            {{data.email}}
          </template>
          <template #filter="{filterModel,filterCallback}">
            <InputText type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" placeholder="Search by name " />
          </template>
        </Column>
        <Column field="username" header="Username" style="min-width:12rem">
          <template #body="{data}">
            {{data.username}}
          </template>
          <template #filter="{filterModel,filterCallback}">
            <InputText type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" placeholder="Search by name " />
          </template>
        </Column>
        <Column header="Action" style="min-width:12rem">
          <template #body="{data}">
            <router-link :to="`/users/${data.id}`" class="btn btn-sm btn-info">View</router-link>
            <button class="btn btn-sm btn-primary" @click="editUserHandler(data)">Edit</button>
            <button class="btn btn-sm btn-danger" @click="onDelete(data.id)">Delete</button>
          </template>
        </Column>
      </DataTable>
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
  import UserAddModal from "@/components/user/UserAddModal";
  import {FilterMatchMode} from "primevue/api";
  export default {
    name: "UserList",
    components: {UserAddModal},
    data() {
      return {
        visible: false,
        editable: false,
        selectedUser: {},
        userFilter: {
          'name': {value: null, matchMode: FilterMatchMode.CONTAINS},
          'email': {value: null, matchMode: FilterMatchMode.STARTS_WITH},
          'username': {value: null, matchMode: FilterMatchMode.STARTS_WITH},
        },
        loading1: true
      }
    },
    created() {
      this.fetchUsersList();
    },
    mounted() {
      this.loading1 = false;
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
