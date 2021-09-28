<template>
  <div class="loader initial" v-show="loading">
    <div class="spinner">
      <div class="spinner-circle"></div>
      <div class="spinner-circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  props: {
    loading: {
      type: Boolean,
      required: true
    }
  },
}
</script>
