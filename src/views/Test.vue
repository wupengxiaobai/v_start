<template>
  <div class="test">
    <!-- <div class="date">{{ new Date() | mixin_time_fmt('yyyy年MM月dd日 hh时mm分ss秒') }}</div> -->

    <!-- <router-link to="/mine">mine</router-link> -->

    <div class="test">list: {{ list }}</div>
    <hr />
    <div class="token">tempList: {{ tempList }}</div>
    <hr />
    <div>whiteUser: {{ whiteUser }}</div>
    <hr />
    <div
      class="namespace"
    >test_namespace: {{ listNamespace }}</div>
    <!--  {{ $store.state.test_namespace.listNameSpace }} -->
    <hr />
    <van-button type="primary" @click="setListData">setList</van-button>
    <van-button type="primary" @click="getDataAndSetData">getDataAndSet</van-button>
    <hr />
    <van-button type="primary" @click="namespaceGetDataAndSetData">namespaceGetDataAndSetData</van-button>
  </div>
</template>

<script>
import Mixin from "utils/mixin.js";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "test",
  mixins: [Mixin],
  data() {
    return {};
  },
  methods: {
    setListData() {
      const list = [
        {
          nickname: "小白",
          age: 18
        },
        {
          nickname: "小黑",
          age: 81
        }
      ];
      this.setList(list);
    },

    getDataAndSetData() {
      this.getListAndSet({
        page: 1,
        limit: 20
      });
    },

    namespaceGetDataAndSetData() {
        this['test_namespace/getListAndSetNamespace']()
    },

    ...mapMutations({
      setList: "SET_LIST"
    }),
    ...mapActions(["getListAndSet", "test_namespace/getListAndSetNamespace"])
  },
  computed: {
    ...mapState({
      listNamespace: state => state.test_namespace.listNameSpace
    }),
    ...mapGetters(["list", "tempList", "whiteUser"])
  },
  components: {}
};
</script>

<style lang="less" scoped>
@import "~@/common/css/variable.less";
.test /deep/ .van-button {
  margin: 0.2rem;
  font-size: 0.12rem;
}
</style>
