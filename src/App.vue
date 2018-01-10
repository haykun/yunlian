<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    route() {
      if (this.$route.name == "task") {
        this.$store.state.home = require("./assets/img/footer/foot_home_s.png");
        this.$store.state.query = require("./assets/img/footer/foot_query_d.png");
        this.$store.state.my = require("./assets/img/footer/foot_my_d.png");
      } else if (this.$route.name == "check") {
        this.$store.state.query = require("./assets/img/footer/foot_query_s.png");
        this.$store.state.home = require("./assets/img/footer/foot_home_d.png");
        this.$store.state.my = require("./assets/img/footer/foot_my_d.png");
      } else {
        this.$store.state.my = require("./assets/img/footer/foot_mv_s.png");
        this.$store.state.query = require("./assets/img/footer/foot_query_d.png");
        this.$store.state.home = require("./assets/img/footer/foot_home_d.png");
      }
    }
  },
  watch: {
    $route() {
      this.route();
    }
  },
  mounted() {
    this.route();
  }
};
</script>

<style>

</style>
