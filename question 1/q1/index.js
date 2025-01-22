function flattenArray(nestedArray, depth = Infinity) {
    if (!Array.isArray(nestedArray)) {
        throw new Error("Input must be an array.");
    }
    if (depth === 0) {
        return nestedArray;
    }

    let result = [];
    for (let item of nestedArray) {
        if (Array.isArray(item) && depth > 0) {
           
            result = result.concat(flattenArray(item, depth - 1));
        } else {
            result.push(item);
        }
    }
    return result;
}

console.log(flattenArray([1, [2, [3, [4, 5]]]], 2));

console.log(flattenArray([1, [2, [3, [4, 5]]]]));

console.log(flattenArray([]));

console.log(flattenArray([1, [2, [3, [4, 5]]]], 0));
