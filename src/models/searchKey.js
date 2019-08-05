import {
    StorageModel
} from "utils/storage.js";
const storage = new StorageModel;

/**
 * 搜索历史【队列】
 */
class SearchKey {
    keyName = 'q'
    maxLength = 10

    //  @获取历史
    getHistory(keyName) {
        if (!keyName) keyName = this.keyName
        return storage.get(keyName)
    }

    //  @添加历史
    addToHistory(value, keyName) {
        var keyName = keyName || this.keyName
        var stors = this.getHistory(keyName)

        if (!stors) return storage.save(keyName, [value])

        if (stors.includes(value)) return stors

        if (stors.length >= this.maxLength) stors.pop()

        stors.unshift(value)
        storage.save(keyName, stors)
        return stors
    }

    // @清除历史
    clearHistory(keyName) {
        var keyName = keyName || this.keyName;
        storage.remove(keyName)
    }
}

export {
    SearchKey
}