function longString(arr) {
    if (arr.length === 0) return null;
    else {
        let max = arr[0].length;
        arr.map(v => max = Math.max(max, v.length));
        result = arr.filter(v => v.length == max);
        return result;
    }
}

console.log(longString(["apple", "banana", "pear", "kiwi"]))
console.log(longString([]))
console.log(longString(["apple", "banana", "pear", "kiwi", "grapes"]))