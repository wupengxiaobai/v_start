<template>
  <div class="test">
    <H1>{{ TestDefault }}</H1>
    <h2>{{ new Date | mixin_time_fmt('yyyy年MM月dd日 HH时mm分ss秒SS毫秒') }}</h2>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
import Mixin from "utils/mixin.js";
export default {
  mixins: [Mixin],
  name: "test",
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapGetters(["TestDefault"])
  }
};
</script>



<style lang="less" scoped>
@import "~@/common/css/variable.less";
.test /deep/ .van-button {
  margin: 0.2rem;
  font-size: 0.12rem;
}
</style>
