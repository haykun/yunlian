<template>
  <div class="uate">
      <app-star :size="{ type : 4 }" :score="{ type : 4 }"></app-star>
  </div>
</template>

<script>
import Star from "../../components/peisong/star.vue";
export default {
  data() {
    return {};
  },
  components: {
    "app-star": Star
  }
};
</script>


<style lang="stylus" scoped>
</style>
