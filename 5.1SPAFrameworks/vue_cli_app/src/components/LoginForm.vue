<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.password"
          type="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="agreement">Accept agreement</b-form-checkbox>
          <b-form-checkbox value="newsletter">I want to get some mails</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" class="mr-2" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
//import { userService } from "@/services";
import { mapState } from "vuex";

export default {
  name: 'LoginForm',
  data() {
      return {
        form: {
          email: '',
          password: '',
          checked: []
        },
        show: true
      }
    },
    methods: {
      /*
      onSubmit(evt) {
        evt.preventDefault()

        userService.login(this.form)
          .then(response => {
              this.loginSuccess(response.data.message);
          })
          .catch(error =>{
              console.error(error)
          })
      },*/
      onSubmit(evt) {
        evt.preventDefault();

        let email = this.form.email;
        let password = this.form.password;
        
        this.$store
          .dispatch("login", { email, password }) //call login action from vuex state
          .then(response => {
              this.loginSuccess(response);
          })
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.password = ''
        this.form.checked = []

        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      loginSuccess(data){
        this.$emit('loginSuccess', data); // emitting data to parent component
      }
    },
    computed: {
      ...mapState({
        errors: state => state.auth.errors
      })
    }
}
</script>