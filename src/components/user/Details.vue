<template>
  <NotFound v-if="userDetails == null" />
  <div class="row mt-3" v-else>
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <h5>User Information</h5>
          <hr>
          <Loading :loading="loading" />
          <div v-if="!loading">
            <p>Name: {{userDetails.name}}</p>
            <p>Email: {{userDetails.email}}</p>
            <p>Username: {{userDetails.username}}</p>
            <p>phone: {{userDetails.phone}}</p>
            <p>Website: {{userDetails.website}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <h5>Company / Address</h5>
          <hr>
          <Loading :loading="loading" />
          <div v-if="!loading">
          Company: {{ userDetails.company.name}}, {{ userDetails.company.catchPhrase}}, {{ userDetails.company.bs}}
          <p>street: {{userDetails.address.street}}, {{userDetails.address.suite}}, {{userDetails.address.city}}, {{userDetails.address.zipcode}}</p>
          <p>Geo location:Lat: {{ userDetails.address.geo.lat }}, Lng: {{ userDetails.address.geo.lng }}</p>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import Loading from "@/components/Loading";
import NotFound from "@/components/partials/NotFound";

  export default {
    name: "UserInformation",
    components: {NotFound, Loading},
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
