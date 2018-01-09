<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  watch: {
    $route() {
      console.log(1);
    }
  }
};
</script>

<style>

</style>
