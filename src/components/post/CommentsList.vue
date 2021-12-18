<template>
  <div class="row">
    <h4 class="my-3">All Comments List</h4>
    <div class="col-12 my-2" v-for="comment in comments" :key="comment">
      <div class="card">
        <div class="card-body d-flex justify-space-between align-items-center">
          <img src="https://repository-images.githubusercontent.com/106262467/4cbe6700-41c9-11ea-8860-57668b5a0ec2" width="100" class="mr-5" />
          <div>
            <h6>{{ comment.name }}</h6>
            <p class="text-muted">{{ comment.email }}</p>
            <p>{{ comment.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CommentLists",
    props: ["comments"]
  }
</script>

<style scoped>
.card {
  padding: .5rem;
  border-radius: 10px;
}
</style>
