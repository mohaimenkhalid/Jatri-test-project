<template>
  <div class="row mt-3">
    <div class="col-md-12">
      <div class="card">
        <div class="card-body">
          <h4>Album Name:</h4>
          <h3>{{ albumDetails.title }}</h3>
        </div>
      </div>
      <PhotoAlbum
        :loading="loading"
        :albumPhotos="albumPhotosList"
      />
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import PhotoAlbum from "@/components/album/PhotoAlbums";

export default {
  name: "albumDetails",
  components: {PhotoAlbum},
  created() {
      this.albumDetailsInformation(this.$route.params.id)
      this.albumPhotos(this.$route.params.id)
    },
    methods: {
      ...mapActions('albums', ['albumDetailsInformation', 'albumPhotos']),
    },
    computed: {
      ...mapState({
        loading: state => state.albums.loading,
        albumDetails: state => state.albums.albumDetails,
        albumPhotosList: state => state.albums.albumPhotos,
      }),
    },
  }
</script>
