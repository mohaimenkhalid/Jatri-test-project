<template>
  <Loading :loading="loading" />
  <div class="row mt-3" v-if="!loading">
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <h5>User Information</h5>
          <hr>
          <p>Name: {{userDetails.name}}</p>
          <p>Email: {{userDetails.email}}</p>
          <p>Username: {{userDetails.username}}</p>
          <p>phone: {{userDetails.phone}}</p>
          <p>Website: {{userDetails.website}}</p>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <h5>Company / Address</h5>
          <hr>
          Company: {{ userDetails.company.name}}, {{ userDetails.company.catchPhrase}}, {{ userDetails.company.bs}}
          <p>street: {{userDetails.address.street}}, {{userDetails.address.suite}}, {{userDetails.address.city}}, {{userDetails.address.zipcode}}</p>
          <p>Geo location:Lat: {{ userDetails.address.geo.lat }}, Lng: {{ userDetails.address.geo.lng }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import Loading from "@/components/Loading";

  export default {
    name: "UserInformation",
    components: {Loading},
    created() {
      this.userDetailsInformation(this.$route.params.id)
    },
    methods: {
      ...mapActions('user', ['userDetailsInformation']),
    },
    computed: {
      ...mapState({
        loading: state => state.user.loading,
        userDetails: state => state.user.userDetails,
      }),
    },
  }
</script>
