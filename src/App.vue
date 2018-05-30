<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/> <!-- titleMessage="Title message" --> <!-- Can add properties this way if desired -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";

@Component({
  components: { HelloWorld }
})
export default class App extends Vue {}
</script>


<style lang="scss" src="./App.vue.scss" />