const sortLargeArray = (array) => {
    return array.sort((a, b) => a - b);
}

module.exports = sortLargeArray;

const recursiveSort = (array) => {
    if (array.length === 1) {
        return array;
    }
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);
    return merge(recursiveSort(left), recursiveSort(right));
}