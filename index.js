function linearSearch(sortedArray, target) {
    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] === target) {
            return i;
        }
    }
    return -1;
}

function binarySearch(sortedArray, target) {
    let left = 0;
    let right = sortedArray.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (sortedArray[mid] === target) {
            return mid;
        } else if (sortedArray[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

const largeArray = Array.from({length: 1000000}, (_, i) => i + 1);
const target = 999999;

console.time('Linear Search');
const linearResult = linearSearch(largeArray, target);
console.timeEnd('Linear Search');
console.log(`Linear Search Result: ${linearResult}`);

console.time('Binary Search');
const binaryResult = binarySearch(largeArray, target);
console.timeEnd('Binary Search');
console.log(`Binary Search Result: ${binaryResult}`);