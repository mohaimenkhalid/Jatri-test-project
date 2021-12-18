<template>
  <div class="album-wrapper">
    <h3>Photo Album</h3>
    <Loading :loading="loading" />
    <div class="row" v-if="!loading">
      <div class="col-md-2 my-2 col-6" v-for="photo in albumPhotos" :key="photo.id">
        <div class="card">
          <div class="card-body">
            <img :src="photo.thumbnailUrl" width="100" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Loading from "@/components/Loading";
  export default {
    name: "photoAlbum",
    components: {Loading},
    props: ["albumPhotos", "loading"]
  }
</script>

<style scoped>
  .album-wrapper{
    background: #edecec;
    padding: 1rem;
    margin-top: 1rem;
  }

  .card {
    padding: 0;
    border-radius: 5px;
  }

  img {
    width: 100%
  }
</style>
