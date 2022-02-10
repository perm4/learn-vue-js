<template>
  <div>
    <app-header></app-header>
    <button v-on:click="fetchData">get data</button>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import axios from 'axios';
export default {
  data: function() {
    return {
      str: 'hi'
    }
  },
  components: {
    'app-header': AppHeader,
  },
  methods: {
    fetchData: function() {
      axios.get('http://localhost:8080/baseinfo/feeInfo.do')
      .then(function(response) {
        console.log(response);
      }).catch(function(error) {
        console.log(error);
      });
    },
  },
}
</script>

<style>

</style>