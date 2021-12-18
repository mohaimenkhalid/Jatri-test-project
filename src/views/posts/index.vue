<template>
  <div class="card my-3">
    <div class="card-header d-flex justify-content-between">
      <h4>Posts List</h4>
      <button class="btn btn-danger" @click="openModal()">Add New Post</button>
    </div>
    <div class="card-body table-responsive">
      <DataTable :value="getAllPosts" :paginator="true" class="p-datatable-customers" :rows="10"
                 dataKey="id" v-model:filters="albumFilters" filterDisplay="row" :loading="loading1" responsiveLayout="scroll"
      >
        <template #empty>
          No Data found.
        </template>
        <template #loading>
          Loading data. Please wait.
        </template>
        <Column field="title" header="Title" style="min-width:12rem">
          <template #body="{data}">
            {{data.title}}
          </template>
          <template #filter="{filterModel,filterCallback}">
            <InputText type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" placeholder="Search by title " />
          </template>
        </Column>
        <Column field="userId" header="User ID" style="min-width:12rem">
          <template #body="{data}">
            {{data.userId}}
          </template>
          <template #filter="{filterModel,filterCallback}">
            <InputText type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" placeholder="Search by User Id " />
          </template>
        </Column>
        <Column field="body" header="Body" style="min-width:12rem">
          <template #body="{data}">
            {{data.body}}
          </template>

        </Column>
        <Column header="Action" style="min-width:12rem">
          <template #body="{data}">
            <router-link :to="`/posts/${data.id}`" class="btn btn-sm btn-info">View</router-link>
            <button class="btn btn-sm btn-primary" @click="editUserHandler(data)">Edit</button>
            <button class="btn btn-sm btn-danger" @click="onDelete(data.id)">Delete</button>
          </template>
        </Column>
      </DataTable>
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
  import postModal from "@/components/post/postModal";
  import {FilterMatchMode} from "primevue/api";
  export default {
    name: "PostList",
    components: {postModal},
    data() {
      return {
        visible: false,
        editable: false,
        selectedPost: {},
        albumFilters: {
          'title': {value: null, matchMode: FilterMatchMode.CONTAINS},
          'userId': {value: null, matchMode: FilterMatchMode.EQUALS},
        },
        loading1: true
      }
    },
    created() {
      this.fetchPostsList();
    },
    mounted() {
      this.loading1 = false;
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
        this.$toast.add({severity:'success', summary: 'Success', detail:'Post Deleted Successfully', life: 3000});
      },
      editUserHandler(post) {
        this.selectedPost = post
        this.openModal(true)
      }
    },
    computed: {
      ...mapState({
        posts: state => state.post.posts,
        loading: state => state.post.loading
      }),
      ...mapGetters('post', ['getAllPosts']),
    },
  }
</script>
