<template>
  <div class="test"></div>
</template>


<script>
export default {
  name: "test",
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>



<style lang="less" scoped>
@import "~@/common/css/variable.less";
.test /deep/ .van-button {
  margin: 0.2rem;
  font-size: 0.12rem;
}
</style>
