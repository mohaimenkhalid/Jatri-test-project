<template>
  <div class="login-container">
    <div class="row">
      <div class="col-md-4 offset-md-4 login-form">
        <h3>Login</h3>
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <input type="text" v-model.trim="email" class="form-control" placeholder="Your Email" />
          </div>
          <div class="form-group mt-3">
            <input type="password" v-model="password" class="form-control" placeholder="Your Password" />
          </div>
          <div class="form-group text-center mt-3">
            <input type="submit" class="btnSubmit" value="Login"/>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: '',
      submitted: false
    }
  },
  methods: {
    ...mapActions('account', ['login']),
    handleSubmit () {
      this.submitted = true;
      const { email, password } = this;
      if (email && password) {
        let loginFormData = {email, password}
        this.login(loginFormData)
      }
    }
  }
}

</script>

<style scoped>
.login-container {
  margin-top: 5%;
  margin-bottom: 5%;
}

.login-form {
  padding: 5%;
  background: #f05837;
  border-radius: 1rem;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}

.login-form h3 {
  text-align: center;
  margin-bottom: 12%;
  color: #fff;
}

.btnSubmit {
  font-weight: 600;
  width: 50%;
  color: #282726;
  background-color: #fff;
  border: none;
  border-radius: 1.5rem;
  padding: 2%;
}

.btnForgetPwd {
  color: #fff;
  font-weight: 600;
  text-decoration: none;
}

.btnForgetPwd:hover {
  text-decoration: none;
  color: #fff;
}
</style>
