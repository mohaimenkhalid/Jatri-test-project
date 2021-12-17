<!--<template>-->
<!--  <div class="card my-3">-->
<!--    <div class="card-header d-flex justify-content-between">-->
<!--      <h4>Albums List</h4>-->
<!--    </div>-->
<!--    <div class="card-body table-responsive">-->
<!--      <table class="table table-hover">-->
<!--        <thead class="table-light">-->
<!--        <tr>-->
<!--          <th>Name</th>-->
<!--          <th>Action</th>-->
<!--        </tr>-->
<!--        </thead>-->
<!--        <tbody>-->
<!--        <tr v-for="album in getAllAlbums" :key="album.id">-->
<!--          <td>{{ album.title }}</td>-->
<!--          <td class="d-flex justify-content-between">-->
<!--            <router-link :to="`/albums/${album.id}`" class="btn btn-sm btn-info">View</router-link>-->
<!--          </td>-->
<!--        </tr>-->
<!--        </tbody>-->
<!--      </table>-->
<!--    </div>-->
<!--  </div>-->

<!--</template>-->

<template>
  <div class="row">
    <div class="col-md-8 offset-md-2 my-3">
      <div class="card">
        <div class="card-body">
          <h4>Albums List</h4>
          <DataTable :value="getAllAlbums" :paginator="true" class="p-datatable-customers" :rows="4"
                     dataKey="id" v-model:filters="albumFilters" filterDisplay="row" :loading="loading1" responsiveLayout="scroll"
          >
            <template #empty>
              No Data found.
            </template>
            <template #loading>
              Loading data. Please wait.
            </template>
            <Column field="title" header="Name" style="min-width:12rem">
              <template #body="{data}">
                {{data.title}}
              </template>
              <template #filter="{filterModel,filterCallback}">
                <InputText type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" placeholder="Search by name " />
              </template>
            </Column>
            <Column header="Action" style="min-width:12rem">
              <template #body="{data}">
                <router-link :to="`/albums/${data.id}`" class="btn btn-sm btn-info">View</router-link>
              </template>
            </Column>
          </DataTable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {FilterMatchMode} from 'primevue/api';
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  data() {
    return {
      albumFilters: {
        'title': {value: null, matchMode: FilterMatchMode.CONTAINS},
      },
      loading1: true
    }
  },
  created() {
    this.fetchAlbumsList();
  },
  mounted() {
      this.loading1 = false;
      console.log(this.customers2)
  },
  methods: {
  ...mapActions('albums', ['fetchAlbumsList']),
  },
  computed: {
  ...mapState({
      loading: state => state.user.loading
    }),
  ...mapGetters('albums', ['getAllAlbums'])
  },
  }
</script>

<style >

</style>


<!--<script>
  import {mapActions, mapState, mapGetters} from 'vuex'
  export default {
    name: "Albums",
    components: {},
    created() {
      this.fetchAlbumsList();
    },
    methods: {
      ...mapActions('albums', ['fetchAlbumsList']),
    },
    computed: {
      ...mapState({
        loading: state => state.user.loading
      }),
      ...mapGetters('albums', ['getAllAlbums'])
    },
  }
</script>-->
