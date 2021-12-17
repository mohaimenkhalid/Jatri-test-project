<template>
  <Modal>
    <template v-slot:header>
      <h6 class="text-dark">{{ editable ? "Edit Post": "Add Post"}}</h6>
    </template>
    <template v-slot:body>
      <form @submit.prevent="editable ? submitUpdateHandler() : submitAddHandler()" ref="postForm">
        <div class="form-group">
          <input type="text" v-model="form.title" class="form-control" placeholder="Write Title" required />
        </div>
        <div class="form-group mt-3">
          <textarea v-model="form.body" class="form-control" placeholder="Write Post Body" rows="5" required></textarea>
        </div>
        <div class="form-group text-center mt-3">
          <button type="submit" class="btn btn-danger" :disabled="submitted"
                  v-html="submitted ?
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
    name: 'PostModal',
    components: {Modal},
    props: ["editable", "selectedPost"],
    data(){
      return {
        form: {
          id: '',
          title: '',
          body: '',
        },
        submitted: false
      }
    },
    watch: {
      selectedPost: function (newVal) {
        let {id, title, body} = newVal;
        this.form.id = id;
        this.form.title = title;
        this.form.body = body;
      }
    },
    methods: {
      ...mapActions('post', ['addNewPost', 'updatePost']),
      async submitAddHandler() {
        this.submitted = true;
        await this.addNewPost(this.form)
        this.close()
        this.submitted = false;
      },
      async submitUpdateHandler() {
        this.submitted = true;
        await this.updatePost(this.form)
        this.close()
        this.submitted = false;
      },
      close() {
        this.form.id= '';
        this.form.title= '';
        this.form.body= '';
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
