<template>
  <div class="card my-3">
    <div class="card-header d-flex justify-content-between">
      <h4>Albums List</h4>
    </div>
    <div class="card-body table-responsive">
      <table class="table table-hover">
        <thead class="table-light">
        <tr>
          <th>Name</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="album in getAllAlbums" :key="album.id">
          <td>{{ album.title }}</td>
          <td class="d-flex justify-content-between">
            <router-link :to="`/albums/${album.id}`" class="btn btn-sm btn-info">View</router-link>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script>
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
</script>
