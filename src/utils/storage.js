/**
 * 本地操作
 */
import storage from 'good-storage';

class StorageModel {
    save = (key, value) => storage.set(key, value)

    get = (key) => storage.get(key, "")

    has = (key) => storage.has(key)

    remove = (key) => storage.remove(key)
}

export {
    StorageModel
}