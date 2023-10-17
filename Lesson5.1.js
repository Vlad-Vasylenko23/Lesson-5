let arr = Array.from(Array(10))
const target = 7
arr = arr.map(
    (i) => Math.round(Math.random()*10)).sort((a, b) => a - b)

console.table(arr)

function binarySearch(arr, target) {
    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
        const m = Math.floor((l + r) / 2);

        if (arr[m] === target) {
            return m
        } else if (arr[m] < target) {
            l = m + 1
        } else {
            r = m - 1
        }
    }

    return -1
}
const result = binarySearch(arr, target)
console.log (result)

