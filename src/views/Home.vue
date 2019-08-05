<template>
  <div class="home">
    <hr />
    <div class="testApi">测试request1 api使用</div>
    <van-button type="primary" @click="getTest1">请求get</van-button>
    <van-button type="primary" @click="postTest1">请求post</van-button>
    <hr />
    <div class="testApi2">测试request2 api使用</div>
    <van-button type="primary" @click="getTest2">请求get</van-button>
    <van-button type="primary" @click="postTest2">请求post</van-button>
    <hr />
    <div class="testStore">测试 vuex 的使用</div>
    <div class="getters">getters测试 --- {{ 'oneData: ' + oneData + ' otherData: ' + otherData }}</div>
    <div class="state">state测试 --- {{ 'onedata: ' + onedata + ' otherdata: ' + otherdata }}</div>
    <div class="mutations">
      <br />mutations测试
      <br />
      <van-button type="primary" @click="setOneData">setOneData</van-button>
      <br />
      <van-button type="primary" @click="setOtherData">setOtherData</van-button>
    </div>
    <br />actions测试
    <br />
    <div class="actions">
      <van-button type="primary" @click="commitSetData">actions commit</van-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions, mapState } from "vuex";

// request1 方式请求测试
import { postMassage, getTestData } from "@/request/api";
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    /**
     * 测试 request1 api 使用
     */
    getTest1() {
      getTestData().then(res => {
        console.log(`getTest1Res: ${JSON.stringify(res)}`);
      });
    },
    postTest1() {
      postMassage({
        name: "米斯特吴",
        gender: "1"
      }).then(res => {
        console.log(`postTest1: ${JSON.stringify(res)}`);
      });
    },

    /**
     * 测试 request2 api 使用
     */
    getTest2() {
      this.$api.testModel.getTestData().then(res => {
        console.log(`getTest2: ${JSON.stringify(res)}`);
      });
    },
    postTest2() {
      this.$api.testModel.postMassage().then(res => {
        console.log(`postTest2: ${JSON.stringify(res)}`);
      });
    },

    /**
     * mutations 执行测试
     */
    setOneData() {
      const oneData = "new oneData！！";
      this.SET_ONE_DATA(oneData);
    },
    setOtherData() {
      const otherData = "new otherData！！";
      this.SET_OTHER_DATA(otherData);
    },
    ...mapMutations({
      SET_ONE_DATA: "SET_ONE_DATA",
      SET_OTHER_DATA: "SET_OTHER_DATA"
    }),

    //  actions 提交多个测试
    commitSetData() {
      this.commitUpdateManyData({
        oneData: "firstData",
        otherData: "secondData"
      });
    },
    ...mapActions(["commitUpdateManyData"])
  },
  computed: {
    ...mapState({
      onedata: "oneData",
      otherdata: "otherData"
    }),
    ...mapGetters(["oneData", "otherData"])
  },
  components: {}
};
</script>

<style lang="less" scoped>
@import "../assets/css/variable.less";

hr {
  border: 1px solid @main-color;
}

.home /deep/ .van-button {
  margin: 0.2rem;
}
</style>
