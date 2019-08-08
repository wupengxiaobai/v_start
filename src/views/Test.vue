<template>
  <div class="test">
    <van-button type="primary" @click="getTest">请求get</van-button>
    <van-button type="primary" @click="postTest">请求post</van-button>
    <div class="date">{{ new Date() | mixin_time_fmt('yyyy年MM月dd日 hh时mm分ss秒') }}</div>
    <router-link to="/mine">mine</router-link>
    <div class="test">test: {{ test }}</div>
    <div class="token">token: {{ token }}</div>
    <van-button type="primary" @click="setTest">setTest</van-button>
    <van-button type="primary" @click="setToken">setToken</van-button>
  </div>
</template>

<script>
import Mixin from "utils/mixin.js";
import { mapGetters, mapMutations, createNamespacedHelpers } from "vuex";
const { mapGetters: mapGlobalGetters, mapActions:mapGlobalActions } = createNamespacedHelpers("global");
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
    },
    setTest() {
      this.SET_TEST("设置test完成");
    },
    setToken() {
      this.setToken("设置token完成");
    },
    // "SET_TOKEN",
    ...mapMutations(["SET_TEST"]),
    ...mapGlobalActions(["setToken"])
  },
  computed: {
    ...mapGetters(["test"]),
    ...mapGlobalGetters(["token"])
  },
  components: {}
};
</script>

<style lang="less" scoped>
@import "~@/common/css/variable.less";
.test /deep/ .van-button {
  margin: 0.2rem;
}
</style>
