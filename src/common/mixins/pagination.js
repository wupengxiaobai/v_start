/**
 * 分页 mixin
 */
var paginationMixin = {
  data() {
    return {
      arrayData: [], //  列表数据
      total: null,  //  总长度
      locked: false //  加载锁
    }
  },
  methods: {
    //  加载整合更多数据
    loadMoreData(data) {
      const tempArray = this.arrayData.concat(data)
      this.arrayData = tempArray
    },

    hasMore() {
      return this.arrayData.length < this.total;
    },

    lockeded() {
      this.locked = true
    },

    unLockeded() {
      this.locked = false
    },

    setTotal(count) {
      this.total = count
    },

    _recoverPagination() {
      this.arrayData = [];
      this.total = null;
      this.locked = false;
    }
  }
}

export {
  paginationMixin
}