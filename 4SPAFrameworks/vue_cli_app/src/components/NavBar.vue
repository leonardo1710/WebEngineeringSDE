<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <!-- Integration of router-link in bootstrap -->
          <b-nav-item to="/">{{ appTitle }}</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item v-if="isAuthenticated" @click="logout">Logout</b-nav-item>

          <b-nav-item-dropdown text="More" right>
            <b-dropdown-item to="/login">Login</b-dropdown-item>
          </b-nav-item-dropdown>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'NavBar',
  props: {
    appTitle: String
  },
  computed: {
    ...mapGetters(["isAuthenticated", "currentUser"])
  },
  methods: {
    logout(){
      this.$store
          .dispatch("logout") 
          .then(response => {
              console.log(response);
          })
    }
  }
}
</script>