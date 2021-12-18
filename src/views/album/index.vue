<template>
  <div class="row">
    <div class="col-md-8 offset-md-2 my-3">
      <div class="card">
        <div class="card-body">
          <h4>Albums List</h4>
          <DataTable :value="getAllAlbums" :paginator="true" class="p-datatable-customers" :rows="10"
                     dataKey="id" v-model:filters="albumFilters" filterDisplay="row" :loading="loading1" responsiveLayout="scroll"
          >
            <template #empty>
              No Data found.
            </template>
            <template #loading>
              Loading data. Please wait.
            </template>
            <Column field="title" header="Name" style="min-width:15rem">
              <template #body="{data}">
                {{data.title}}
              </template>
              <template #filter="{filterModel,filterCallback}">
                <InputText type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" placeholder="Search by name " />
              </template>
            </Column>
            <Column field="userId" header="User ID" style="min-width:12rem">
              <template #body="{data}">
                {{data.userId}}
              </template>
              <template #filter="{filterModel,filterCallback}">
                <InputText type="text" v-model="filterModel.value" @input="filterCallback()" class="p-column-filter" placeholder="Search by User ID " />
              </template>
            </Column>
            <Column header="Action" style="min-width:8rem">
              <template #body="{data}">
                <router-link :to="`/albums/${data.id}`" class="btn btn-primary">
                  <i class="pi pi-eye" />
                  View
                </router-link>
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
        'userId': {value: null, matchMode: FilterMatchMode.EQUALS},
      },
      loading1: true
    }
  },
  created() {
    this.fetchAlbumsList();
  },
  mounted() {
      this.loading1 = false;
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

