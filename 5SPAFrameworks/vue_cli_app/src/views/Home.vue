<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    
    <h1 v-if="loggedIn">Welcome {{user.email}}!</h1>
    <h1 v-else>Welcome!</h1>

    <p v-if="isAuthenticated">authenticated with vuex state: {{currentUser.email}}</p>
    <p v-else>not authenticated in vuex state</p>
    
    <HelloWorld v-bind:msg="msg"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapGetters } from "vuex";

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  props: {
    loggedIn: {
      type: Boolean,
      required: false
    },
    user: {
      type: Object,
      required: false
    }
  },
  data(){
    return{
      msg: "I am a component."
    }
  },
  computed: {
    ...mapGetters(["isAuthenticated", "currentUser"])
  },
}
</script>
