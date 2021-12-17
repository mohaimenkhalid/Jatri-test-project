<template>
  <div class="card">
    <div class="card-body">
      <table class="table">
        <thead>
        <tr>
          <td>SI#</td>
          <td>Title</td>
          <td>Status</td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(todo, index) in todos" :key="todo.id">
          <td>{{ index+1 }}</td>
          <td>{{ todo.title }}</td>
          <td>{{ todo.completed ? "completed" : "Incomplete" }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TodoListTable',
    props: ['todos']
  }
</script>
