<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <Weather />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Weather from '@/components/Weather.vue'; // @ is an alias to /src

@Options({
  components: {
    Weather,
  },
})
export default class Home extends Vue {}
</script>
