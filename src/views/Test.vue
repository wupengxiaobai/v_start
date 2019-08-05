<template>
  <div class="test">
    <van-button type="primary" @click="getTest">请求get</van-button>
    <van-button type="primary" @click="postTest">请求post</van-button>
    <div class="date">{{ new Date() | mixin_time_fmt('yyyy年MM月dd日 hh时mm分ss秒') }}</div>
    <router-link to="/mine">mine</router-link>
  </div>
</template>

<script>
import Mixin from "utils/mixin.js";
export default {
  name: "test",
  mixins: [Mixin],
  data() {
    return {};
  },
  methods: {
    getTest() {
      this.$api.testModel.getTestData().then(res => {
        console.log(`getTest: ${JSON.stringify(res)}`);
      });
    },
    postTest() {
      this.$api.testModel.postMassage().then(res => {
        console.log(`postTest: ${JSON.stringify(res)}`);
      });
    }
  },
  computed: {},
  components: {}
};
</script>

<style lang="less" scoped>
@import "~@/common/css/variable.less";
.test /deep/ .van-button {
  margin: 0.2rem;
}
</style>
