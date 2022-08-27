function dictionary () {
    // 字典属性
    this.items = []

    // 在字典中添加键值对
    dictionary.prototype.set = function (key, value) {
        this.items[key] = value
    }

    // 判断字典中是否有某个key
    dictionary.prototype.has = function (key) {
        return this.items.hasOwnProperty(key)
    }

    // 从字典中移除元素
    dictionary.prototype.remove = function (key) {
        if(!this.has(key)) return false
    
        delete this.items[key]
        return true
    }

    // 根据key获取value
    dictionary.prototype.get = function (key) {
        return this.has(key) ? this.items[key] : undefined
    }

    // 获取所有的keys
    dictionary.prototype.keys = function () {
        return Object.keys(this.items)
    }

    // 获取所有的value
    dictionary.prototype.values = function () {
        return Object.values(this.items)
    }

    // size方法
    dictionary.prototype.size = function () {
        return this.keys().length
    }

    // clear方法
    dictionary.prototype.clear = function () {
        this.items = {}
    }
}