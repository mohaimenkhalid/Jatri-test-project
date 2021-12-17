<template>
  <div class="row">
    <div class="col-12 my-2" v-for="comment in comments" :key="comment">
      <div class="card">
        <div class="card-body">
          <h5>{{ comment.name }}</h5>
          <p class="text-muted">{{ comment.email }}</p>
          <p>{{ comment.body }}</p>
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
