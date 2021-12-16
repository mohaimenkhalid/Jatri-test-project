<template>
  <Modal>
    <template v-slot:header>
      <h6 class="text-dark">{{ editable ? "Edit ": "Add "}} User</h6>
    </template>
    <template v-slot:body>
      <form @submit.prevent="submitHandler()" ref="userForm">
        <div class="form-group">
          <input type="text" v-model="form.name" class="form-control" placeholder="Your Name" required />
        </div>
        <div class="form-group mt-3">
          <input type="email" v-model="form.email" class="form-control" placeholder="Your Email" required />
        </div>
        <div class="form-group mt-3">
          <input type="text" v-model="form.username" class="form-control" placeholder="Your Username" required />
        </div>
        <div class="form-group text-center mt-3">
          <button type="submit" class="btn btn-danger" :disabled="loading"
                  v-html="loading ?
                   `<i class='fa fa-spin fa-spinner mr-2'></i> loading`: 'Submit'"
          >

          </button>
        </div>
      </form>
    </template>
  </Modal>
</template>

<script>
  import Modal from "@/components/modal";
  import {mapActions, mapState} from 'vuex'

  export default {
    name: 'UserAddModal',
    components: {Modal},
    props: ["editable"],
    data(){
      return {
        form: {
          name: '',
          email: '',
          username: '',
        },
        visible: false,

      }
    },
    methods: {
      ...mapActions('user', ['addNewUser']),
      async submitHandler() {
        await this.addNewUser(this.form)
        this.$refs.userForm.reset();
        this.close()
      },
      close() {
        this.$emit("close");
      },
    },
    computed: {
      ...mapState({
        loading: state => state.user.loading
      })
    }
  }
</script>
