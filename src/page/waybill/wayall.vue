<template>
  <div class="content">
      <way-card></way-card>
  </div>
</template>

<script>
import WayAll from "../../components/waybill/card.vue";
export default {
  components: {
    "way-card": WayAll
  }
};
</script>

<style lang="stylus" scoped>
@import '../../components/stylus/mixins.styl';

.content {
  padding: 0 px2rem(20px);
  padding-top: px2rem(70px);
}  
</style>


