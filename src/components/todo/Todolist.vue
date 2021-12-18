<template>
  <div class="card">
    <div class="card-body">
      <h5 v-if="isCompleted">Completed Todo List</h5>
      <h5 v-else>InCompleted Todo List</h5>
      <hr />
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
          <td>
            <Badge value="Completed" severity="primary" v-if="isCompleted"></Badge>
            <Badge value="InComplete" severity="danger" v-else></Badge>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TodoListTable',
    props: ['todos', 'isCompleted']
  }
</script>
