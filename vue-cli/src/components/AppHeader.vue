<template>
  <header>
    <h1>{{ propsData }}</h1>
    <button v-on:click="sendEvent">send</button>
    <input type="text" v-model="value">
  </header>
</template>

<script>
export default {
  // props: {
  //   str: null,
  // },
  props: ['propsData'],
  data: function() {
    return {
      value: null,
    };
  },
  methods: {
    sendEvent: function() {
      this.$emit('renew', this.value);
    },
  },
}
</script>

<style>

</style>