<template>
  <div class="row mt-5">
    <div class="col-md-6">
      <TodoListTable :todos="completeTodos" :isCompleted="true" />
    </div>
    <div class="col-md-6">
      <TodoListTable :todos="incompleteTodos" :isCompleted="false"/>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";
import TodoListTable from "@/components/todo/Todolist";

export default {
  name: "Todos",
  components: {TodoListTable},
  created() {
    this.getTodosByUser(this.$route.params.id)
  },
  methods: {
    ...mapActions('user', ['getTodosByUser']),
  },
  computed: {
    ...mapState({
      loading: state => state.post.loading
    }),
    ...mapGetters('user', ['getAllTodos']),
    completeTodos() {
      return this.getAllTodos.filter(todo => todo.completed)
    },
    incompleteTodos() {
      return this.getAllTodos.filter(todo => !todo.completed)
    }
  },
}
</script>
