Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return i;  // 返回的这个 i 就是元素的索引下标，
        }
    }
    return false;
}

const arr = ['a','b','v','f']
arr.splice(arr.contains('b'),1)


const pddd =[]
pddd.push({use:'ssa',ss:'ddd'})

console.log(pddd);