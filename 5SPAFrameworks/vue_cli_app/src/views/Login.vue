<template>
  <b-container class="bv-example-row">
    <b-row align-h="center" class="mt-4 mb-4">
      <h2 class="text-info">Login Page</h2>
    </b-row>
    <b-row align-h="center">
      <b-col cols="6">
        <LoginForm @loginSuccess="loginSuccess" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import LoginForm from '@/components/LoginForm.vue'
  export default {
    name: 'Login',
    components: {
      LoginForm
    },

    methods: {
      loginSuccess(data){
        // programmatic navigation with params
        this.$router.push({ 
          name: 'Home', 
          params: {loggedIn: true, user: data} 
        });
      }
    }
  }
</script>