
var RandomizedSet = function() {
    this.set = new Set();
    this.list = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.set.has(val)) return false;
    this.list.push(val);
    this.set.add(val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!this.set.has(val)) return false;
    this.list.splice(this.list.indexOf(val), 1);
    return this.set.delete(val);
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const n = this.list.length;
    let rand = Math.floor(Math.random() * n);
    let i = 0;
    for(const val of this.set.values())
    {
        if(i === rand) return val;
        i++;
    }
};


var obj = new RandomizedSet()
obj.insert(4)
obj.insert(2)
obj.insert(7)
obj.insert(5)
obj.insert(9)
obj.insert(1)
obj.remove(3)
console.log(obj.getRandom());

