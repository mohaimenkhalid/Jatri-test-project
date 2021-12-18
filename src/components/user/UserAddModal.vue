<template>
  <Modal>
    <template v-slot:header>
      <h6 class="text-dark">{{ editable ? "Edit ": "Add "}} User</h6>
    </template>
    <template v-slot:body>
      <form @submit.prevent="editable ? submitUpdateHandler() : submitAddHandler()" ref="userForm">
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
                   `<i class='fa fa-spin fa-spinner mr-2'></i> loading...`: 'submit'"
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
    props: ["editable", "selectedUser"],
    data(){
      return {
        form: {
          id: '',
          name: '',
          email: '',
          username: '',
        },

      }
    },
    watch: {
      selectedUser: function (newVal) {
        let {id, name, email, username} = newVal;
        this.form.id = id;
        this.form.name = name;
        this.form.email = email;
        this.form.username = username;
      }
    },
    methods: {
      ...mapActions('user', ['addNewUser', 'updateUser']),
      async submitAddHandler() {
        await this.addNewUser(this.form)
        this.close()
        this.$toast.add({severity:'success', summary: 'Success', detail:'User Added Successfully', life: 3000});
      },
      async submitUpdateHandler() {
        await this.updateUser(this.form)
        this.close()
        this.$toast.add({severity:'success', summary: 'Success', detail:'User Updated Successfully', life: 3000});
      },
      close() {
        this.form.id= '';
        this.form.name= '';
        this.form.email= '';
        this.form.username= '';
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
